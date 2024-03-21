<template>
	<main class="h-screen my-8 flex gap-8">
		<ProjectsSidebar />
		<NewProject v-if="projectStore.projectState.selectedProjectId === null" />

		<NoProjectSelected
			v-if="projectStore.projectState.selectedProjectId === undefined"
		/>
		<SelectedProject
			v-if="typeof projectStore.projectState.selectedProjectId === 'number'"
		/>
	</main>
</template>
<script setup>
import { ref, computed } from "vue"
import ProjectsSidebar from "./components/ProjectsSidebar.vue"
import NewProject from "./components/NewProject.vue"
import NoProjectSelected from "./components/NoProjectSelected.vue"
import useProjectStore from "./stores/projectStore"
import SelectedProject from "./components/SelectedProject.vue"

const projectStore = useProjectStore()

const currentComponent = computed(() => {
	const selectedProjectId = projectStore.projectState.selectedProjectId

	if (selectedProjectId === null) {
		return "NewProject"
	} else if (selectedProjectId === undefined) {
		return "NoProjectSelected"
	} else {
		return "SelectedProject"
	}
})
</script>
