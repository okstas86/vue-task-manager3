<template>
	<div class="w-[35rem] mt-16">
		<header class="pb-4 mb-4 border-b-2 border-stone-300">
			<div class="flex items-center justify-between">
				<h1 class="text-3xl font-bold text-stone-600 mb-2">
					{{ projectStore.projectState.selectedProject.title }}
				</h1>
				<button class="text-stone-600 hover:text-stone-950">Delete</button>
			</div>
			<p class="mb-4 text-stone-400">{{ formattedDate }}</p>
			<p class="text-stone-600 whitespace-pre-wrap">
				{{ projectStore.projectState.selectedProject.description }}
			</p>
		</header>

		Task
	</div>
</template>

<script setup>
import { computed } from "vue"
import useProjectStore from "../stores/projectStore"
const projectStore = useProjectStore()

const formattedDate = computed(() => {
	const selectedProject = projectStore.projectState.selectedProject
	if (selectedProject) {
		return new Date(selectedProject.dueDate).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})
	} else {
		return ""
	}
})
</script>
