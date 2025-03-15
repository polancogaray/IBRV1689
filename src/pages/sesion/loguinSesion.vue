<template>
  <q-card
    flat
    class="q-pa-md text-white"
    style="max-width: 400px; margin: auto">
    <q-card-section>
        <div class="q-pa-md">
      <!-- Campo de correo electrónico -->
      <q-input
        v-model="email"
        label="Correo electrónico"
        rounded
        outlined
        :rules="[(val) => validateEmail(val) || 'Ingrese un correo válido']" />

      <!-- Campo de contraseña -->
      <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        label="Contraseña"
        rounded
        outlined
        :rules="[
          (val) => validatePassword(val) || 'La contraseña es requerida',
        ]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd" />
        </template>
      </q-input>
    </div>
      <!-- Botón para enviar el formulario -->
      <q-btn
        size="1.1rem"
        no-caps
        color="primary"
        label="Iniciar sesión"
        class="full-width rounded-buttom"
        @click="onSubmit" />
      <!-- Botón para enviar el formulario -->
      <q-btn
        size="1.1rem"
        no-caps
        color="primary"
        label="Registrar usuario"
        class="full-width rounded-buttom"
        @click="register" />
      <q-btn
        size="1.1rem"
        no-caps
        color="primary"
        label="cerrar sesión"
        class="full-width rounded-buttom"
        @click="logout" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "src/boot/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


// Estados reactivos
const email = ref("");
const password = ref("");
const isPwd = ref(true); // Para mostrar/ocultar la contraseña

// Validación del correo electrónico
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validación de la contraseña
const validatePassword = (password) => {
  return password.length >= 6; // Mínimo 6 caracteres
};

// Función para manejar el envío del formulario
const onSubmit = async () => {
  if (validateEmail(email.value) && validatePassword(password.value)) {
    console.log("Inicio de sesión exitoso");
    await login(email.value,password.value);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  } else {
    console.log("Por favor, complete los campos correctamente");

    
  }
};

// Registrar un nuevo usuario
const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value,password.value);
    console.log("Usuario registrado:", userCredential.user);
    
  } catch (error) {
    console.error("Error al registrar:", error.message);
  }
};

// Iniciar sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario autenticado:", userCredential.user);
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
  }
};

// Cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
  }
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
.rounded-buttom {
	border-radius: 26px;
}
</style>
