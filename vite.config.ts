import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
    plugins: [],
    esbuild: {
        jsxFactory: "DOMcreateElement",
        jsxFragment: "DOMcreateFragment",
        jsxInject:
            "import { DOMcreateElement, DOMcreateFragment } from 'cedro/src/core/jsxsupport';",
    },

});
