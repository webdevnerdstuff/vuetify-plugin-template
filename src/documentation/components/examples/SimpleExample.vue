<template>
	<VPluginTemplate />
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import AnswersDialog from '../AnswersDialog.vue';


const dialog = ref(false);
// const answers = ref({
// 	bar: null,
// 	foo: null,
// });

const templateCode = `<template>
  <VPluginTemplate />
</template>
`;

const scriptCode = `\<script setup\>
import { ref } from 'vue';


const foo = ref('bar');
\</script\>`;

const typesCode = `{
  foo: string,
  error: boolean | undefined,
}`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of the <code class="ic">VStepperForm</code> component.',
		name: 'Simple Form',
		script: scriptCode,
		template: templateCode,
		types: typesCode,
	},
});
</script>


<style lang="scss" scoped></style>
