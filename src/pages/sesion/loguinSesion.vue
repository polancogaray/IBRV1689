<template>
  <div class="q-pa-md">
    <!-- Campo de correo electrónico -->
    <q-input v-model="email" label="Correo electrónico" rounded outlined standout="primary text-white"
      class="q-field--dark" :rules="[(val) => validateEmail(val) || 'Ingrese un correo válido']" />

    <!-- Campo de contraseña -->
    <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Contraseña" rounded outlined
      standout="primary text-white" class="q-field--dark"
      :rules="[(val) => validatePassword(val) || 'La contraseña es requerida']">
      <template v-slot:append>
        <q-icon class="cursor-pointer" :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
      </template>
    </q-input>
  </div>
  <!-- Botón para enviar el formulario -->
  <q-btn size="1.1rem" no-caps outline label="Iniciar sesión" class="full-width rounded-buttom" @click="onSubmit" />
  <!-- Botón para enviar el formulario -->
  <q-btn size="1.1rem" no-caps outline label="Registrar usuario" class="full-width rounded-buttom" @click="register" />
  <q-btn size="1.1rem" no-caps outline label="cerrar sesión" class="full-width rounded-buttom" @click="logout" />
</template>

<script setup>
import { ref } from 'vue';
import supabase from 'src/boot/supabase.js';
import { useAuthStore } from 'src/stores/authStore';
import { userLogguedStore } from 'src/stores/userLogguedStore';

// Estados reactivos
const email = ref('');
const password = ref('');
const isPwd = ref(true); // Para mostrar/ocultar la contraseña
const authStore = useAuthStore();
const userLoggued = userLogguedStore();

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
    console.log('Inicio de sesión exitoso');
    // console.log("supabase",supabase);
    await login(email.value, password.value);
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  } else {
    console.log('Por favor, complete los campos correctamente');
  }
};

// Registrar un nuevo usuario
const register = async () => {
  try {
    console.log('Usuario registrado:', email.value);
  } catch (error) {
    console.error('Error al registrar:', error.message);
  }
};

// Iniciar sesión
const login = async (email, password) => {
  try {
    console.log('supabase', supabase);
    const data = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      authStore.setToken(data.access_token);
      await getDataUserAuthenticated(data.data.user);
    }

    // if (error) {
    //   console.log("Error al iniciar sesión: " + error.message);
    // } else {
    console.log('Inicio de sesión exitoso', data);
    // }
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message);
  }
};

const getDataUserAuthenticated = async (user) => {
  try {
    // const user = supabase.auth.user();
    userLoggued.setUserData(user);
    console.log('Usuario autenticado:', user);
  } catch (error) {
    console.error('Error al obtener el usuario autenticado:', error.message);
  }
};

// Cerrar sesión
const logout = async () => {
  try {
    console.log('Sesión cerrada');
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
  }
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
.rounded-buttom {
  border-radius: 26px;
}

.custom-input {
  background-color: grey;
  color: white;
}
</style>
