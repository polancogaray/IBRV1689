<template>
  <q-page class="flex flex-center q-pa-md">
    <OrdenAdoracionPage/>
  </q-page>
</template>

<script setup>
// No se necesita lógica adicional para este ejemplo
import OrdenAdoracionPage from './orden_adoracion/OrdenAdoracionPage.vue';
</script>

<style scoped>
/* Estilos personalizados */
.q-card {
  max-width: 800px; /* Ancho máximo de la tarjeta */
  position: relative; /* Necesario para posicionamiento absoluto del avatar */
}

.q-card-section {
  padding: 16px;
}

.text-h4 {
  font-size: 2rem;
  font-weight: bold;
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: bold;
}

.text-body1 {
  font-size: 1rem;
  line-height: 1.5;
}

.text-caption {
  font-size: 0.875rem;
  color: #666;
}

.bg-primary {
  background-color: #1976d2; /* Color primario de Quasar */
}

.absolute-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
