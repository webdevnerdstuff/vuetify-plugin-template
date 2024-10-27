<template>
	<v-list
		:color="drawerOptions.color ? 'white' : 'primary'"
		density="compact"
	>
		<template v-for="item, k in menuItems">
			<v-list-group
				v-if="item.items"
				:key="k"
				:value="item.title"
			>
				<template v-slot:activator="{ props }">
					<v-list-item
						density="compact"
						v-bind="props"
						:prepend-icon="item.icon"
						:title="item.title"
					></v-list-item>
				</template>

				<template v-for="subItem in item.items">
					<v-list-item
						v-if="subItem.href"
						:key="subItem.title"
						class="sub-items"
						:href="subItem.href"
						:prepend-icon="subItem.icon"
					>
						<div v-html="subItem.title"></div>
					</v-list-item>
				</template>
			</v-list-group>

			<v-list-item
				v-else
				:key="item.title"
				:class="{
					'v-list-item--active': active === item.href,
				}"
				:color="drawerOptions.color ? 'white' : 'primary'"
				:href="item.href"
				link
				:title="item.title"
			>

				<template v-slot:prepend>
					<v-icon :icon="item.icon"></v-icon>
				</template>
			</v-list-item>
		</template>
	</v-list>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';


const drawerOptions = inject<Docs.DrawerOptions>('drawerOptions')!;
const store = useMenuStore();
const active = ref<string>('');
const menuItems: Docs.MenuItem[] = store.menuItems;

onMounted(() => {
	smoothScroll();

	active.value = window.location.hash || '#home';
});

function smoothScroll(): void {
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();

			const hash: string = anchor.hash;
			const id: string = hash.replace('#', '');
			const yOffset: number = -55;
			const element: HTMLElement | null = document.getElementById(id);

			if (element) {
				const y: number = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

				active.value = hash;

				window.location.hash = hash;
				window.scrollTo({ behavior: 'smooth', top: y });
			}
		});
	});
}
</script>

<style lang="scss" scoped>
.sub-items {
	font-size: .9em;
	padding-left: calc(var(--indent-padding) - 10px) !important;

	:deep(.v-icon) {
		font-size: 1em !important;
		margin-right: 1em !important;
	}
}
</style>
