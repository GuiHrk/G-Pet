import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if(user) {
        displayerUserInfo(user);
    }else {
        console.log("Nenhum Usuário Encontrado");
        alert("Usuário Inexistente");
    }
});

function displayerUserInfo(user){
    const usernameElement = document.getElementById('username');

    const displayName = user.displayName || user.email.split('@')[0];

    usernameElement.textContent = 'Olá, ${displayName}!';
}
