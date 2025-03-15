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
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";



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
const onSubmit = () => {
  if (validateEmail(email.value) && validatePassword(password.value)) {
    console.log("Inicio de sesión exitoso");
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  } else {
    console.log("Por favor, complete los campos correctamente");

    
  }
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
.rounded-buttom {
	border-radius: 26px;
}
</style>
