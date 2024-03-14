<template>
	<aside
		class="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"
	>
		<h2 class="mb-8 font-bold uppercase md:text-xl text-stone-200">
			Your projects
		</h2>
		<div>
			<Button @click="projectStore.handleAddStartProject">
				+ Add Project
			</Button>
		</div>
		<ul class="mt-8">
			<li
				v-for="project in projectStore.projectState.projects"
				:key="project.id"
			>
				<button
					:class="
						project.id === projectStore.projectState.selectedProjectId
							? cl_btn + ' bg-stone-800 text-stone-200'
							: cl_btn + ' text-stone-400'
					"
				>
					{{ project.title }}
				</button>
			</li>
		</ul>
	</aside>
</template>

<script setup>
import Button from "./Button.vue"
import { defineProps } from "vue"
import useProjectStore from "../stores/projectStore"

const projectStore = useProjectStore()

let cl_btn =
	"w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800"
</script>
