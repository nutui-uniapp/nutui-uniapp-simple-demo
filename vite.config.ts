import path from "node:path";
import UniApp from "@dcloudio/vite-plugin-uni";
import UniComponents from "@uni-helper/vite-plugin-uni-components";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import { NutResolver } from "nutui-uniapp";

function r(...paths: string[]) {
  return path.resolve(process.cwd(), ".", ...paths);
}

export default defineConfig({
  resolve: {
    alias: {
      "@": r("src")
    }
  },
  plugins: [
    UniComponents({
      dts: "types/components.d.ts",
      dirs: ["src/components"],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [
        NutResolver()
      ]
    }),
    AutoImport({
      dts: "types/auto-imports.d.ts",
      imports: [
        "vue",
        "uni-app",
        "pinia",
        {
          "nutui-uniapp/composables": [
            "useToast"
          ]
        }
      ]
    }),
    // @ts-expect-error whatever
    UniApp.default()
  ]
});