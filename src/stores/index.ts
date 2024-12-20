import { defineStore } from 'pinia';
import packageJson from '../../package.json';


export const useCoreStore = defineStore('core', () => {
	const scopedPackageName: string = packageJson.name;
	const packageName: string = scopedPackageName.split('/')[1] || scopedPackageName;

	// Links //
	const repoBaseUrl: string = `https://github.com/webdevnerdstuff/${packageName}`;
	const links: Docs.Links = {
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		npm: `https://www.npmjs.com/package/${scopedPackageName}`,
		pnpm: 'https://pnpm.io/',
		vue: 'https://vuejs.org/',
		vuetify: 'https://vuetifyjs.com/',
		vuetifyGithub: 'https://github.com/vuetifyjs/vuetify',
	};

	const actions = {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(packageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(packageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${packageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${packageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getLocalStorage: () => (): unknown => {
			const value = localStorage.getItem(packageName);
			return value;
		},
		getTheme: (): unknown => {
			const value = localStorage.getItem(`${packageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		links,
		package: packageJson,
		packageName,
		pluginVersion: packageJson.version,
	};
});
