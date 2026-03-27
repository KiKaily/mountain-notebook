/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FORMSPREE_ENDPOINT?: string;
	readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
