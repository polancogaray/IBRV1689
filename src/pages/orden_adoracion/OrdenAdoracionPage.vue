<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="full-width relative-position" flat bordered>
      <!-- Cabecera -->
      <q-card-section class="text-center">
        <div class="text-h6 text-center text-weight-bold">
          <q-item-label>Orden de adoración</q-item-label>
        </div>
        <div class="text-overline">DOMINGO 9 de Marzo 2025</div>
      </q-card-section>

      <!-- Culto de Oración -->
      <culto-oracion-page/>

      <!-- Culto de Adoración -->
      <culto-adoracion-page/>

      <!-- Clase Dominical -->
      <clase-dominical-page/>
      
    </q-card>
  </q-page>
</template>

<script setup>
// No se necesita lógica adicional para este ejemplo
import CultoAdoracionPage from './culto_adoracion/CultoAdoracionPage.vue';
import CultoOracionPage from './culto_oracion/CultoOracionPage.vue';
import ClaseDominicalPage from './clase_dominical/ClaseDominicalPage.vue';
</script>

