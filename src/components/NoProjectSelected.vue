<template>
	<div class="mt-24 text-center w-2/3">
		<img
			class="w-16 h-16 object-contain mx-auto"
			:src="Logo"
			alt="An empty task list"
		/>
		<h2 class="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
		<p class="text-stone-400 mb-4">
			Select a project or get started with a new one
		</p>
		<p class="mt-8">
			<Button @click="projectStore.handleAddStartProject"
				>Create new project</Button
			>
		</p>
	</div>
</template>

<script setup>
import Logo from "/logo.png"
import Button from "./Button.vue"
import useProjectStore from "../stores/projectStore"

const projectStore = useProjectStore()
</script>
