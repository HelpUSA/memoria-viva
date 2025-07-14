// Substitua os valores abaixo pelas suas credenciais reais do Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "memoriaviva-a238a.firebaseapp.com",
  projectId: "memoriaviva-a238a",
  storageBucket: "memoriaviva-a238a.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

initializeApp(firebaseConfig);