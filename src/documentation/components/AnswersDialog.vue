<template>
	<v-dialog
		v-model="modelValue"
		max-width="500"
	>
		<v-card title="Submitted Answers">
			<v-card-text>
				<VCodeBlock
					class="mt-4 mb-2"
					:code="JSON.stringify(answers, null, 2)"
					:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
					lang="javascript"
					:prismjs="codeBlockSettings.plugin === 'prismjs'"
					:theme="codeBlockSettings.theme"
				/>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					text="Close"
					@click="modelValue = false"
				></v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
const modelValue = defineModel<boolean>();
const { answers } = defineProps<{ answers: any; }>();

interface CodeBlockSettings {
	plugin: string;
	theme: string;
}

const codeBlockSettings = inject<CodeBlockSettings>('codeBlockSettings', {
	plugin: 'prismjs',
	theme: 'tomorrow',
});
</script>
