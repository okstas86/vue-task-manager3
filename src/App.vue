<template>
	<main class="h-screen my-8 flex gap-8">
		<ProjectsSidebar />
		<NewProject v-if="projectStore.projectState.selectedProjectId === null" />
		<NoProjectSelected v-else />
	</main>
</template>
<script setup>
import { ref } from "vue"
import ProjectsSidebar from "./components/ProjectsSidebar.vue"
import NewProject from "./components/NewProject.vue"
import NoProjectSelected from "./components/NoProjectSelected.vue"
import useProjectStore from "./stores/projectStore"

const projectStore = useProjectStore()
</script>
