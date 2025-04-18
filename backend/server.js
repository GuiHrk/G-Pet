const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 


const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.json());

app.get('/',async (req, res) =>{
  res.send('O Servidor está online');
});

app.get('/checkout-session/sessionId',async (req, res)=>{
  try{
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json(session);
  }catch (error){
    res.status(400).json({error: error.message});
  }
})



app.post('/create-checkout-session', async (req, res) => {
    const { productName, amount, userEmail } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card','pix'],
          mode: 'payment',
          line_items: [
            {
              price_data: {
                currency: 'brl',
                product_data: {
                  name: productName,
                },
                unit_amount: amount * 100, 
              },
              quantity: 1,
            },
          ],
          customer_email: userEmail,
          success_url: 'pagamento-sucesso.html',
          cancel_url: 'pagamento-cancelado.html', });

          res.json({ id: session.id });
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    res.status(500).json({ error: 'Erro ao criar sessão de pagamento' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});