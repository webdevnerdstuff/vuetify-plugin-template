import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { fa } from 'vuetify/iconsets/fa-svg';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// ? Only needed if using labs components //
import * as labs from 'vuetify/labs/components';
import defaultThemes from './theme';


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
