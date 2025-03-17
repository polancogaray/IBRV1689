// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticación
import { getFirestore } from "firebase/firestore"; // Para Firestore (base de datos)
import { getAnalytics } from "firebase/analytics"; // Para Analytics (opcional)

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAIJl7YKw5bH520cyLS70NoHZFkPfGZk6o",
  authDomain: "ibrv1689.firebaseapp.com",
  projectId: "ibrv1689",
  storageBucket: "ibrv1689.firebasestorage.app",
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén las instancias de Firebase que necesites
const auth = getAuth(app); // Para autenticación
const db = getFirestore(app); // Para Firestore
const analytics = getAnalytics(app); // Para Analytics (opcional)

// Exporta las instancias para usarlas en tu aplicación
export { auth, db, analytics };