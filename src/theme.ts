
import { createSystem, defaultConfig, defineConfig, defineTokens } from "@chakra-ui/react";

const tokens = defineTokens({
  colors: {
    green: {
      DEFAULT: { value: "#64DB57" },
      100: { value: "#CCF0BC" },
      700: { value: "#01200F" }
    },
    purple: {
      DEFAULT: { value: "#B4ADFF" }
    },
    black: { value: "#011302" },
    white: { value: "#FFFFFF" }
  }
});

const config = defineConfig({
  theme: {
    tokens
  }
});

export const mySystem = createSystem(defaultConfig, config);