<template>
	<div class="w-[35rem] mt-16">
		<menu class="flex items-center justify-end gap-4 my-4">
			<li>
				<button class="text-stone-800 hover:text-stone-950">Cancel</button>
			</li>
			<li>
				<button
					class="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50"
				>
					Save
				</button>
			</li>
		</menu>
		<div>
			<Input label="Title" />
			<Input label="Description" :textArea="textArea" />
			<Input label="Duo Date" />
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"
import Input from "./Input.vue"
const textArea = ref(true)
</script>
