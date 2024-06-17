import type { Config } from 'tailwindcss'

import { fontFamily } from "tailwindcss/defaultTheme";
import scrollbar from "tailwind-scrollbar";

export default <Partial<Config>>{
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: false,
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          lg: "0.5rem",
          xl: "0.5rem",
          "2xl": "0.5rem",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
};