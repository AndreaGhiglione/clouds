import { signInWithGoogle } from "./firebase.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

window.onload = () =>  {
    const button_login = document.querySelector('#login_button');

    button_login.onclick = () => login();
}

function login(){
    signInWithGoogle()
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location.href = "dashboard.html";
        // ...
    }).catch((error) => { 
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}