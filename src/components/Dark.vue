<script setup>
import { ref } from 'vue'

const isDarkMode = ref(false)

function toggleDarkMode() {
    
    isDarkMode.value = !isDarkMode.value

    if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
</script>

<template>
    <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <button @click="toggleDarkMode"
            class="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700 dark:text-gray-300 transition-colors duration-500">
            {{ isDarkMode ? 'Passa a light mode 🔆' : 'Passa a dark mode 😴' }}
        </button>
        <div class="p-4 text-black dark:text-white">
            <p>La Dark mode è {{ isDarkMode ? 'ON' : 'OFF' }}.</p>
        </div>
    </div>
</template>


