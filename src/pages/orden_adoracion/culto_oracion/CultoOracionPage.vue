<template>
      <!-- Culto de Oración -->
      <q-card-section>
        <div class="text-h6 text-center text-weight-bold">Culto de Oración</div>
        <div class="text-caption text-center">Horario: 10:15 am</div>
        <q-separator class="q-my-sm" />
        <div class="text-body1">Lectura: Salmo 145:8-9</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Oh que amigo nos es Cristo.</div>
      </q-card-section>

</template>

<script setup>
// No se necesita lógica adicional para este ejemplo
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
