<template>
	<aside
		class="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"
	>
		<h2 class="mb-8 font-bold uppercase md:text-xl text-stone-200">
			Your projects
		</h2>
		<div>
			<Button @click="onStartAddProject"> + Add Project </Button>
		</div>
		<ul></ul>
	</aside>
</template>

<script setup>
import Button from "./Button.vue"
import { defineProps } from "vue"
const props = defineProps(["onStartAddProject"])
</script>
