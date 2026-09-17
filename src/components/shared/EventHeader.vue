<script setup>
import { computed } from 'vue';

const props = defineProps({
  eventName: {
    type: String,
    default: 'Selene'
  },
  eventDate: {
    type: String,
    required: true
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const shortMonths = ["Nov", "Dic", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct"];
  const day = date.getDate();
  const month = shortMonths[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = date.toLocaleDateString('es-ES', { weekday: 'long' });

  let hour = date.getHours();
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12;
  hour = hour ? hour : 12;
  const minute = date.getMinutes().toString().padStart(2, '0');
  const time = `${hour}:${minute} ${ampm}`;

  return { day, month, year, dayOfWeek, time };
};

const formattedDate = computed(() => formatDate(props.eventDate));
</script>

<template>
  <div
    class="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-between p-8 text-center font-sans">

    <!-- 1. Fondo de Supabase -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://ovjstvkjedyscwyfnoma.supabase.co/storage/v1/object/public/invitaciones/0771b402-9620-455b-99e2-c2a878c076cc/canvas-v4/f8eda461-0dd4-4fc2-a2ac-366b7f4f5cbd.webp"
        alt="Fondo invitación" class="w-full h-full object-cover pointer-events-none select-none" />
    </div>

    <!-- 2. Figuras decorativas SVG -->
    <div class="absolute top-10 left-6 w-12 h-12 z-0 pointer-events-none select-none opacity-80"
      style="background: rgb(240, 215, 199); mask-image: url('https://ovjstvkjedyscwyfnoma.supabase.co/storage/v1/object/public/figures/181c410f-563b-46e7-b99e-7d51862ac32b.svg'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;">
    </div>
    <div class="absolute top-16 right-8 w-10 h-10 z-0 pointer-events-none select-none opacity-80"
      style="background: rgb(240, 215, 199); mask-image: url('https://ovjstvkjedyscwyfnoma.supabase.co/storage/v1/object/public/figures/181c410f-563b-46e7-b99e-7d51862ac32b.svg'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;">
    </div>

    <!-- 3. Contenedor central: "mis 15" perfectamente centrados en cruz -->
    <div class="relative z-10 w-full flex flex-col items-center pt-2">

      <!-- Contenedor con altura fija y anclaje central absoluto -->
      <div class="relative w-full h-32 flex items-center justify-center my-2">

        <!-- El número 15 (Centrado absoluto perfecto en X e Y) -->
        <span
          class="style-fifteen absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none leading-none">
          15
        </span>

        <!-- La palabra "mis" (Centrada absoluto perfecto en X e Y, con el cruce exacto) -->
        <span
          class="style-mis absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-7 select-none pointer-events-none drop-shadow-sm">
          mis
        </span>

      </div>

      <!-- Nombre (Selene) en Azul Rey -->
      <h1 class="text-5xl font-serif font-bold text-[rgb(30,90,215)] mt-1 tracking-wide capitalize">
        {{ eventName }}
      </h1>
    </div>

    <!-- 4. Sección inferior (Fecha y Hora) -->
    <div class="relative z-10 w-full flex flex-col items-center pb-4">

      <span class="text-sm font-semibold tracking-widest text-gray-700 uppercase mb-1">
        {{ formattedDate.month }}
      </span>

      <div class="flex items-center justify-center w-full gap-4 my-1">
        <div class="flex items-center gap-1.5 flex-1 justify-end">
          <div class="flex gap-0.5 text-[rgb(30,90,215)]/80">
            <span v-for="n in 8" :key="'l' + n" class="text-[5px]">●</span>
          </div>
          <span class="text-xl font-medium text-[rgb(30,90,215)] capitalize">{{ formattedDate.dayOfWeek }}</span>
        </div>

        <span class="text-7xl font-light text-[rgb(30,90,215)] leading-none px-2">
          {{ formattedDate.day }}
        </span>

        <div class="flex items-center gap-1.5 flex-1 justify-start">
          <span class="text-xl font-medium text-[rgb(30,90,215)]">{{ formattedDate.time }}</span>
          <div class="flex gap-0.5 text-[rgb(30,90,215)]/80">
            <span v-for="n in 8" :key="'r' + n" class="text-[5px]">●</span>
          </div>
        </div>
      </div>

      <span class="text-sm font-medium tracking-widest text-gray-600 mt-1">
        {{ formattedDate.year }}
      </span>

    </div>

  </div>
</template>