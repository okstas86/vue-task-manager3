<template>
	<div class="w-[35rem] mt-16">
		<menu class="flex items-center justify-end gap-4 my-4">
			<li>
				<button class="text-stone-800 hover:text-stone-950">Cancel</button>
			</li>
			<li>
				<button
					@click="handleSave"
					class="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50"
				>
					Save
				</button>
			</li>
		</menu>
		<div>
			<p :class="cl_p">
				<label :class="cl_label"> Title </label>

				<input :class="cl_input" v-model="title" />
			</p>
			<p :class="cl_p">
				<label :class="cl_label">Description</label>
				<textarea v-model="description" :class="cl_input" />
			</p>
			<p :class="cl_p">
				<label :class="cl_label">Due Date</label>

				<input :class="cl_input" v-model="dueDate" type="date" />
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"

const textArea = ref(true)
import useProjectStore from "../stores/projectStore"

const projectStore = useProjectStore()

const cl_p = "flex flex-col gap-1 my-4"
const cl_label = " text-sm font-bold uppercase text-stone-500"
const cl_input =
	"w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

const title = ref("")
const description = ref("")
const dueDate = ref("")

function handleSave() {
	if (
		title.value.trim() === "" ||
		description.value.trim() === "" ||
		dueDate.value.trim() === ""
	) {
		return
	}
	const dataProject = {
		title: title.value,
		description: description.value,
		dueDate: dueDate.value,
	}
	console.log(dataProject)
	projectStore.handleAddProject(dataProject)
	console.log(projectStore.projectState.projects)
}
</script>
