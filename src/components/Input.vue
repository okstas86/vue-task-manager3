<template>
	<p class="flex flex-col gap-1 my-4">
		<label class="text-sm font-bold uppercase text-stone-500">{{
			label
		}}</label>
		<textarea :class="classes" v-if="textArea" />
		<input :class="classes" v-else />
	</p>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps(["textArea", "label"])
const classes =
	"w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
</script>
