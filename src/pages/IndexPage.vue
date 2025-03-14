<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="full-width relative-position" flat bordered>
      <!-- Cabecera -->
      <q-card-section class="text-center bg-primary text-white">
        <div class="text-h6">
          <q-item-label>Orden de adoración</q-item-label>
        </div>
        <div class="text-overline">DOMINGO 9 de Marzo 2025</div>
      </q-card-section>

      <!-- Culto de Oración -->
      <q-card-section>
        <div class="text-h6 text-center text-weight-bold">Culto de Oración</div>
        <div class="text-caption text-center">Horario: 10:15 am</div>
        <q-separator class="q-my-sm" />
        <div class="text-body1">Lectura: Salmo 145:8-9</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Oh que amigo nos es Cristo.</div>
      </q-card-section>

      <!-- Culto de Adoración -->
      <q-card-section>
        <div class="text-h6 text-center text-weight-bold">Culto de Adoración</div>
        <div class="text-center text-caption">Horario: 11 am</div>
        <q-separator class="q-my-sm" />
        <div class="text-body1">LLAMADO A LA ADORACIÓN: Salmo 134</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Mirad bendecid a Jehova.</div>
        <div class="text-body1 q-mt-sm">ORACIÓN</div>
        <div class="text-body1 q-mt-sm">LECTURA DE LA LEY: Deut. 5:6-21</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Que me puede dar Perdón.</div>
        <div class="text-body1 q-mt-sm">LECTURA DEL EVANGELIO: Jn 3:16-18</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Quieres ser salvo de toda maldad.</div>
        <div class="text-body1 q-mt-sm">ORACIÓN PASTORAL POR LA PREDICACIÓN DE LA PALABRA.</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Cuando sopla airada la tempestad.</div>
        <div class="text-body1 q-mt-sm">PREDICACIÓN: “Mi refugio es solo Dios”. Salmo 46</div>
        <div class="text-body1 q-mt-sm">CENA DEL SEÑOR:</div>
        <div class="text-body1 q-mt-sm">HIMNO DE RESPUESTA: Gracias Cristo.</div>
        <div class="text-body1 q-mt-sm">OFRENDA</div>
        <div class="text-body1 q-mt-sm">DOXOLOGÍA: Cristo nuestra esperanza en vida y muerte.</div>
        <div class="text-body1 q-mt-sm">BENEDICIÓN: 1Cor. 16:23</div>
      </q-card-section>

      <!-- Clase Dominical -->
      <q-card-section>
        <div class="text-h6 text-center text-weight-bold">CLASE DOMINICAL</div>
        <div class="text-caption text-center">Horario: 1:30 p.m</div>
        <q-separator class="q-my-sm" />
        <div class="text-body1">Confesión de Fe 1689 “Capítulo 31”</div>
      </q-card-section>
    </q-card>
  </q-page>
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
