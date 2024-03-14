import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useProjectStore = defineStore("projectStore", () => {
	const projectState = ref({
		selectedProjectId: undefined,
		projects: [],
	})

	const handleAddStartProject = () => {
		projectState.value.selectedProjectId = null
	}

	const cancelAddProject = () => {
		projectState.value.selectedProjectId = undefined
	}

	const handleAddProject = projectData => {
		const projectId = Math.random()
		const newProject = {
			...projectData,
			id: projectId,
		}

		projectState.value.projects.push(newProject)
	}
	return {
		projectState,
		handleAddStartProject,
		handleAddProject,
		cancelAddProject,
	}
})

export default useProjectStore
