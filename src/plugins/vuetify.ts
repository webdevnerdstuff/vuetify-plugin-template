import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import defaultThemes from './theme';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { fa } from 'vuetify/iconsets/fa-svg';

// ? Only needed if using labs components //
import * as labs from 'vuetify/labs/components';


export default createVuetify({
	components: {
		components,
		...labs,
	},
	directives,
	icons: {
		aliases,
		defaultSet: 'mdi',
		sets: {
			fa,
			mdi,
		},
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			...defaultThemes,
		},
	},
});
