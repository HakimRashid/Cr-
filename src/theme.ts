import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // Define a pure black color for dark mode
        bg: { DEFAULT: { value: {
              _light: "{colors.white}",
              _dark: "#000", // Pure black for dark mode
            },},
        },

        "bg.subtle": {
          value: {
            _light: "{colors.gray.50}",
            _dark: "#1A1A1A", // A slightly off-black for subtle elements
          },
        },

        fg: { DEFAULT: { value: {
              _light: "{colors.black}",
              _dark: "{colors.whiteAlpha.900}", // A soft white for text in dark mode
            },},
        },
      },
    },

  },
});

export const system = createSystem(defaultConfig, config);