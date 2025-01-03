/// <reference path="../.astro/types.d.ts" />

declare namespace App {
	// Note: 'import {} from ""' syntax does not work in .d.ts files.
	interface Locals {
		user: import('better-auth').User | null
		session: import('better-auth').Session | null
	}
}

interface ImportMetaEnv {
	readonly DATABASE_URL: string
	readonly BETTER_AUTH_SECRET: string
	readonly BETTER_AUTH_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
