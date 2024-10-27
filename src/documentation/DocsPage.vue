<template>
	<v-row class="text-center">
		<v-col cols="12">
			<v-img
				class="my-3"
				contain
				height="200"
				src="../assets/vuetify-logo.svg"
			/>
		</v-col>

		<v-col class="mb-4">
			<h1 class="v-heading text-h3 text-sm-h3 mb-4">
				Vuetify Plugin Template
			</h1>
			<p class="mb-4 text-grey-darken-1">by WebDevNerdStuff</p>
			<v-chip
				color="primary"
				size="small"
				variant="outlined"
			>
				v{{ componentVersion }}
			</v-chip>
		</v-col>
	</v-row>

	<!-- Installation -->
	<v-row id="installation">
		<v-col
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#installation"
				>#</a>
				Installation
			</h2>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						code="pnpm add vuetify-plugin-template"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						lang="plain"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>
							Using <a
								:href="links.pnpm"
								target="_blank"
							>pnpm</a>:
						</template>
					</VCodeBlock>
				</v-col>
				<v-col cols="12">
					<VCodeBlock
						code="npm i vuetify-plugin-template"
						highlightjs
						lang="plain"
					>
						<template #label>Using npm:</template>
					</VCodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<!-- Description -->
	<Section.DescriptionSection />

	<!-- Description -->
	<Section.FeaturesSection />

	<!-- Usage -->
	<Section.UsageSection />

	<!-- Example -->
	<Section.ExampleSection />

	<!-- Components -->
	<!-- <Section.ComponentsSection /> -->

	<!-- Props -->
	<Section.PropsSection />

	<!-- Events -->
	<Section.EventsSection />

	<!-- Slots -->
	<Section.SlotsSection />

	<!-- Playground -->
	<Section.PlaygroundSection />

	<!-- Dependencies -->
	<Section.DependenciesSection />

	<!-- License -->
	<Section.LicenseSection />

	<!-- Legal -->
	<Section.LegalSection />
</template>

<script setup lang="ts">
import packageInfo from '../../package.json';
import * as Section from '@/documentation/sections';


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const links = inject<Docs.Links>('links')!;

const classes = reactive<Docs.GlobalClasses>({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	h4: 'text-secondary v-heading text-h6 text-sm-h6 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});
const componentVersion = ref<string | number>(packageInfo.version);

provide<Docs.GlobalClasses>('classes', classes);
</script>

<style lang="scss" scoped>
:deep(pre),
:deep(code) {
	&.ic {
		background-color: rgb(255 255 255 / 10%) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}
</style>

<style lang="scss">
.v-theme--light {
	pre,
	code {
		&.ic {
			background-color: rgb(0 0 0 / 10%) !important;
		}
	}
}
</style>
