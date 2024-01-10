/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'https://graph-houdini.azurewebsites.net/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		DateTime: {
			type: 'Date',
			unmarshal(val) {
				return new Date(val);
			},
			marshal(date) {
				// return date;
				if (date === null || typeof date === 'undefined') {
					return null;
				}
				return typeof date === 'string' ? date : date.toISOString();
			}
		},
		UUID: {
			type: 'string'
		}
	}
};

export default config;
