<template>
	<button
		class="px-2 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
	>
		<slot></slot>
	</button>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps(["title"])
</script>
