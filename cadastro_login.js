if (typeof firebase === 'undefined') {
    alert("Firebase não foi carregado corretamente!");
} else {
    const firebaseConfig = {
        apiKey: "AIzaSyDLBaNGN0s7MLAcx2XjHmSc1nCgweSaPkI",
        authDomain: "gpet-cadastros.firebaseapp.com",
        projectId: "gpet-cadastros",
        storageBucket: "gpet-cadastros.firebasestorage.app",
        messagingSenderId: "734450995075",
        appId: "1:734450995075:web:9cd0905266c0f5143bb0b6",
        measurementId: "G-L089HL3TPL"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const auth = firebase.auth();
    const db = firebase.firestore();

  
    window.cadastrar = async function () {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
            await db.collection('usuarios').doc(userCredential.user.uid).set({
                nome: nome,
                email: email,
                dataCadastro: firebase.firestore.FieldValue.serverTimestamp()
            });
            alert('Cadastro Realizado Com Sucesso');
            window.location.href = "index.html"
        } catch (error) {
            switch(error.code){
                case 'auth/email-already-in-use':
                    alert('Email Já Utilizado');
                    break;
                case 'auth/weak-password':
                    alert('Senha Muito Fraca');
                    break;
                default:
                    alert('Erro: ' + error.message);
            }
        }
    }
}
