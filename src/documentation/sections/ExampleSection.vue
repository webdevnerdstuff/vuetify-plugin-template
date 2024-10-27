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
			<Example.SimpleExample />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import * as Example from '../components/examples';


const classes = inject<Docs.GlobalClasses>('classes')!;
</script>

<style lang="scss" scoped></style>
