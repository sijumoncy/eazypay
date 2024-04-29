import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
      ],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
          screens: {
            "mob": "425px",
            "tabL" : "900px"
          },
          boxShadow: {
            box: "0px 5px 5px 0px rgba(82, 63, 105, 0.05)",
          },
          colors: {
            bgClr: "var(--bgClr)",
            heading: "#193b62",
            dark: "#141414",
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            primary: {
              DEFAULT: "var(--primary-default)",
            },
          },
        },
      },
    },
  ],
};

export default config;
