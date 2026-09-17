<script setup>
import { ref } from 'vue'

const props = defineProps({
  eventSlug: {
    type: String,
    required: true
  }
})

// Estado del formulario
const form = ref({
  name: '',
  guests: 1,
  attending: 'yes',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // Aquí más adelante conectarás tu backend (Laravel/Node/Firebase)
  console.log('Enviando RSVP para el evento:', props.eventSlug, form.value)
  submitted.value = true
}
</script>

<template>
  <div class="mt-6 border-t pt-6 text-left">
    <h3 class="text-lg font-bold text-gray-800 text-center mb-4">Confirmación de Asistencia</h3>

    <!-- Mensaje de éxito cuando envían el formulario -->
    <div v-if="submitted" class="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center">
      <p class="font-semibold">¡Gracias por confirmar!</p>
      <p class="text-sm mt-1">Hemos registrado tu respuesta correctamente.</p>
    </div>

    <!-- Formulario interactivo -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">Nombre completo</label>
        <input 
          v-model="form.name"
          type="text" 
          required
          placeholder="Ej. María Pérez" 
          class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
        />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">¿Asistirás?</label>
          <select 
            v-model="form.attending"
            class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm bg-white"
          >
            <option value="yes">Sí, ahí estaré</option>
            <option value="no">No podré asistir</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">Pases / Personas</label>
          <input 
            v-model.number="form.guests"
            type="number" 
            min="1" 
            max="5"
            class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">Mensaje para los novios (Opcional)</label>
        <textarea 
          v-model="form.message"
          rows="2"
          placeholder="Escribe un lindo deseo..."
          class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 rounded-xl transition shadow-md text-sm cursor-pointer"
      >
        Enviar Confirmación
      </button>
    </form>
  </div>
</template>