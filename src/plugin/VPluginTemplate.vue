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
import { AllProps } from './utils/props';
import { Props } from '@/types';
import {
	useContainerClasses,
} from './composables/classes';
import {
	useContainerStyle,
} from './composables/styles';
import componentEmits from './utils/emits';



const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits([...componentEmits]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });
const settings = reactive({ ...attrs, ...props });


// -------------------------------------------------- Data #
const modelValue = ref(attrs.modelValue);

console.log({
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

<style lang="scss" scoped>
</style>
