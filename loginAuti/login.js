import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPrkFq30P7ZDdNFVsSfmXWCOXuFYZfx2I",
  authDomain: "login-606ca.firebaseapp.com",
  projectId: "login-606ca",
  storageBucket: "login-606ca.firebasestorage.app",
  messagingSenderId: "120538246243",
  appId: "1:120538246243:web:56a542840db1327d6f1c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Register Event
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login Event
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});