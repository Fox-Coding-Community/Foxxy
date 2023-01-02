import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/**'],
	platform: 'node',
	tsconfig: 'tsconfig.json',
	format: ['cjs'],
	target: 'es2022',
	skipNodeModulesBundle: true,
	clean: true,
	shims: true,
	minify: false,
	splitting: false,
	keepNames: true,
	dts: true,
	sourcemap: true,
});
