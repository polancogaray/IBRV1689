// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticación
import { getFirestore } from "firebase/firestore"; // Para Firestore (base de datos)
import { getAnalytics } from "firebase/analytics"; // Para Analytics (opcional)

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdJE14F7150t5snY-0LcEa-r4S-Ef4E3s",
  authDomain: "ibrv1689.firebaseapp.com",
  projectId: "ibrv1689",
  storageBucket: "ibrv1689.firebasestorage.app",
  messagingSenderId: "1008949836943",
  appId: "1:1008949836943:web:57026166a7e6fd4aa484fa",
  measurementId: "G-NXJJ9DIDMN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén las instancias de Firebase que necesites
const auth = getAuth(app); // Para autenticación
const db = getFirestore(app); // Para Firestore
const analytics = getAnalytics(app); // Para Analytics (opcional)

// Exporta las instancias para usarlas en tu aplicación
export { auth, db, analytics };