<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar
			@changed-theme="updateCodeBlockTheme"
			@updated-drawer="toggleDrawer"
		/>

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			:absolute="drawerOptions.absolute"
			:color="drawerOptions.color"
			:elevation="drawerOptions.elevation"
		>
			<MenuComponent :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<!-- ====================================================== Main Container -->
		<v-main class="pb-10">
			<v-container
				class="px-7"
				style="max-width: 1368px;"
			>
				<DocsPage :codeBlockOptions="codeBlockSettings" />
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { useDisplay } from 'vuetify';
import AppBar from './documentation/layout/AppBar.vue';
import MenuComponent from './documentation/components/MenuComponent.vue';
import DocsPage from './documentation/DocsPage.vue';
import { useCoreStore } from './stores/index';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';


onMounted(() => {
	Prism.highlightAll();
});


const { smAndUp } = useDisplay();
const isSmAndUp = computed<boolean>(() => smAndUp.value);
const store = useCoreStore();
const drawer = ref<boolean>(isSmAndUp.value);
const drawerOptions: Ref<Docs.DrawerOptions> = ref<Docs.DrawerOptions>({
	absolute: false,
	color: '',
	elevation: 10,
});

const codeBlockPlugin: string = 'prismjs';
const codeBlockLightTheme: string = 'tomorrow';
const codeBlockDarkTheme: string = 'tomorrow';

const codeBlockSettings: Ref<Docs.CodeBlockSettings> = ref<Docs.CodeBlockSettings>({
	plugin: codeBlockPlugin,
	theme: codeBlockDarkTheme,
});

function updateCodeBlockTheme(val: string): void {
	codeBlockSettings.value.theme = codeBlockLightTheme;

	if (val === 'dark') {
		codeBlockSettings.value.theme = codeBlockDarkTheme;
	}
}

provide<Docs.CodeBlockSettings>('codeBlockSettings', codeBlockSettings.value);
provide<Docs.DrawerOptions>('drawerOptions', drawerOptions.value);
provide<Docs.Links>('links', store.links);

function toggleDrawer(): void {
	drawer.value = !drawer.value;
}
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

a {
	&:not(.v-list-item, .v-btn, .v-icon, .app-link) {
		color: #bb86fc;

		&:hover {
			color: #b39ddb;
		}
	}
}

.v-theme--light {
	a {
		&:not(.v-list-item, .v-btn, .v-icon, .app-link) {
			color: #6200ee;

			&:hover {
				color: #3700b3;
			}
		}
	}
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}
}

.v-heading {
	position: relative;

	> a {
		color: rgb(var(--v-theme-primary));
		display: inline-block;
		inset: 0;
		margin: 0 -0.7em;
		position: absolute;

		&:not(:hover, :focus) {
			opacity: 0;
		}
	}
}

.name-item:not(:hover, :focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>
