<template>
	<v-row>
		<v-col
			id="components-props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Components
			</h2>

			<div>
				If you have multiple components you can use this section.
			</div>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
// const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;
</script>

<style lang="scss" scoped></style>
