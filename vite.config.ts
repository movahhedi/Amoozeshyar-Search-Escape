import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	// base: "/Amoozeshyar-Search-Escape/",
	base: "",
	build: {
		outDir: "../dist",
		rollupOptions: {
			input: {
				main: "src/index.html",
			},
		},
	}
});
