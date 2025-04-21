const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 


app.use = express.json();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use = (express.json());
app.use(bodyParser.json());
app.get('/',async (req, res) =>{
  res.send('O Servidor está online Plenamente');
});

app.get('/checkout-session/:sessionId',async (req, res)=>{
  try{
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json(session);
  }catch (error){
    res.status(400).json({error: error.message});
  }
})

app.post('/create-checkout-session', async (req, res) => {
    const { items, userEmail } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'payment',
          line_items: items.map(item => ({
            price: item.price_id,
            quantity: item.quantity || 1,
          })),
          customer_email: userEmail || undefined,
          success_url: 'https://guihrk.github.io/G-Pet/pagamento-sucesso.html?session_id={CHECKOUT_SESSION_ID}',
          cancel_url: 'https://guihrk.github.io/G-Pet/pagamento-cancelado.html', });

          res.json({ id: session.id });
  } catch (error) {
    console.error('Erro ao criar sessão:', error);
    res.status(500).json({ error: 'Erro ao criar sessão de pagamento' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});