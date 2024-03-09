<template>
	<main class="h-screen my-8 flex gap-8">
		<ProjectsSidebar :onStartAddProject="handleAddStartProject" />
		<NewProject v-if="projectState.selectedProjectId === null" />
		<NoProjectSelected v-else :onStartAddProject="handleAddStartProject" />
	</main>
</template>
<script setup>
import { ref } from "vue"
import ProjectsSidebar from "./components/ProjectsSidebar.vue"
import NewProject from "./components/NewProject.vue"
import NoProjectSelected from "./components/NoProjectSelected.vue"

const projectState = ref({
	selectedProjectId: undefined,
	projects: [],
})

function handleAddStartProject() {
	projectState.value.selectedProjectId = null
}
</script>
