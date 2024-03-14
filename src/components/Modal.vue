<template>
	<div
		class="absolute left-[400px] top-[200px] bg-white p-4 rounded-md shadow-md"
	>
		<slot></slot>
		<div class="mt-4 text-right">
			<Button @click="closeModal">{{ title }}</Button>
		</div>
	</div>
</template>

<script setup>
import Button from "../components/Button.vue"
const { title } = defineProps(["title"])
const emit = defineEmits(["closeModal"])

function closeModal() {
	emit("closeModal")
}
</script>
