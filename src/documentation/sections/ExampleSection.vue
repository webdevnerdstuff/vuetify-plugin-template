<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Examples
			</h2>
		</v-col>

		<v-col cols="12">
			<ExampleContainer
				:code="getTemplateCode('SimpleExampleRef')"
				:codeBlockSettings="codeBlockSettings"
				@closePicker="closePicker('SimpleExampleRef');"
			>
				<Example.SimpleExample
					ref="SimpleExampleRef"
					:open="refElementsOpen.SimpleExampleRef"
				/>
			</ExampleContainer>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">

import type { ExampleCode } from '../components/ExampleContainer.vue';
import ExampleContainer from '../components/ExampleContainer.vue';
import * as Example from '../components/examples';


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;

const SimpleExampleRef = ref(null);

const refElements = ref({
	SimpleExampleRef,
});

const refElementsOpen = ref({
	SimpleExampleRef: null,
});

function getTemplateCode(exampleName: string): ExampleCode {
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };

	return example;
}

function closePicker(key: string) {
	refElementsOpen.value[key] = new Date().getTime().toString();
}
</script>

<style lang="scss" scoped></style>
