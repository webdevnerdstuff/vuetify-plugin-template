<template>
	<div
		ref="inlineFieldsContainer"
		:class="containerClasses"
		:style="containerStyle"
	>
		My Custom Component
	</div>
</template>

<script setup lang="ts">
import {
	useContainerClasses,
} from '@composables/classes';
import { useDeepMerge } from '@composables/helpers';
import {
	useContainerStyle,
} from '@composables/styles';
import componentEmits from '@data/emits';
import { pluginOptionsInjectionKey } from '@data/globals';
import { AllProps } from '@data/props';
import type { Props } from './types';


const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...componentEmits]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });

const injectedPluginOptions = inject<PluginOptions>(pluginOptionsInjectionKey)!;
const settings: Settings = useDeepMerge(injectedPluginOptions, props);


// -------------------------------------------------- Data #
const modelValue = defineModel();
const componentId = useId();

console.log({
	attrs,
	componentId,
	emit,
	modelValue,
	props,
	settings,
	slots,
});

// ------------------------------------------------ Class & Styles //
const containerClasses = computed(() => useContainerClasses({
	isOption: true,
}));

const containerStyle = computed(() => useContainerStyle({
	displayType: 'block',
}));
</script>

<style lang="scss" scoped></style>
