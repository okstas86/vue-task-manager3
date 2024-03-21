import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useProjectStore = defineStore("projectStore", () => {
	const projectState = ref({
		selectedProjectId: undefined,
		projects: [],
		selectedProject: {},
	})

	const handleAddStartProject = () => {
		projectState.value.selectedProjectId = null
	}

	const cancelAddProject = () => {
		projectState.value.selectedProjectId = undefined
	}
	const handleSelectProject = id => {
		projectState.value.selectedProjectId = id
		if (projectState.value.projects) {
			projectState.value.selectedProject = projectState.value.projects.find(
				project => project.id === id
			)

			console.log("id:", projectState.value.selectedProject)
		} else {
			console.error("Projects not loaded.")
		}
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
		handleSelectProject,
	}
})

export default useProjectStore
