<script setup>
// ... imports ...
import EventHeader from '../components/shared/EventHeader.vue'
import Countdown from '../components/shared/Countdown.vue'
import RsvpForm from '../components/shared/RsvpForm.vue'

// Ejemplo de fecha para Selene
const myEventDate = "2026-11-14T19:00:00" // Sábado 14 Nov 2026 7:00pm
</script>

<template>
  <div class="min-h-screen bg-pink-50 flex items-center justify-center p-6 w-full">
    <!-- Esta vista ahora contendrá la tarjeta elegante + contador + formulario -->
    <div class="flex flex-col items-center gap-6 w-full max-w-md">
      
      <!-- COMPONENTE NUEVO (idéntico a la imagen final) -->
      <EventHeader eventName="Selene" :eventDate="myEventDate" />
      
      <!-- Contador (ya existente, se integrará debajo) -->
      <div class="bg-white p-6 rounded-2xl shadow w-full">
        <p class="text-center text-gray-500 text-sm mb-2">Falta muy poco para celebrar juntos:</p>
        <Countdown :targetDate="myEventDate" />
      </div>

      <!-- Formulario (ya existente) -->
      <RsvpForm eventSlug="Selene-15" />
      
    </div>
  </div>
</template>