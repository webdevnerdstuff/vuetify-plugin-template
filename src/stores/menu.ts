import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links: Docs.Links = coreStore.links;
	const vuetifyLinks: Docs.MenuItem[] = [
		{
			icon: 'mdi:mdi-github',
			key: 'vuetify-github',
			link: links.vuetifyGithub,
			title: 'Github',
		},
		{
			key: 'vuetify',
			link: `${links.vuetify}en/components/all/`,
			title: 'Vuetify Components',
		},
	];

	const menuItems: Docs.MenuItem[] = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#features',
			icon: 'mdi:mdi-tools',
			title: 'Features',
		},
		{
			href: '#usage',
			icon: 'mdi:mdi-power-plug-outline',
			title: 'Usage',
		},
		{
			href: '#props',
			icon: 'mdi:mdi-cog',
			title: 'Props',
		},
		{
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			title: 'Slots',
		},
		{
			href: '#examples',
			icon: 'mdi:mdi-code-json',
			items: [
				{
					href: '#examples',
					icon: 'mdi:mdi-code-json',
					key: 'examples-basic',
					title: 'Simple Example',
				},
			],
			title: 'Examples',
		},
		{
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
		},
		{
			href: '#dependencies',
			icon: 'mdi:mdi-asterisk-circle-outline',
			title: 'Dependencies',
		},
		{
			href: '#license',
			icon: 'mdi:mdi-card-account-details-outline',
			title: 'License',
		},
		{
			href: '#legal',
			icon: 'mdi:mdi-scale-balance',
			title: 'Legal',
		},
	];

	return {
		menuItems,
		vuetifyLinks,
	};
});
