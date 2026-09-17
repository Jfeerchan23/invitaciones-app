<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Recibimos la fecha objetivo como propiedad (ej: "2026-12-31T20:00:00")
const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timer = null

const calculateTime = () => {
  const difference = new Date(props.targetDate) - new Date()
  
  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

onMounted(() => {
  calculateTime()
  timer = setInterval(calculateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="grid grid-cols-4 gap-2 text-center my-6">
    <div class="bg-pink-50 p-3 rounded-xl border border-pink-100">
      <span class="text-2xl font-bold text-pink-600 block">{{ timeLeft.days }}</span>
      <span class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Días</span>
    </div>
    <div class="bg-pink-50 p-3 rounded-xl border border-pink-100">
      <span class="text-2xl font-bold text-pink-600 block">{{ timeLeft.hours }}</span>
      <span class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Horas</span>
    </div>
    <div class="bg-pink-50 p-3 rounded-xl border border-pink-100">
      <span class="text-2xl font-bold text-pink-600 block">{{ timeLeft.minutes }}</span>
      <span class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Minutos</span>
    </div>
    <div class="bg-pink-50 p-3 rounded-xl border border-pink-100">
      <span class="text-2xl font-bold text-pink-600 block">{{ timeLeft.seconds }}</span>
      <span class="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Segundos</span>
    </div>
  </div>
</template>