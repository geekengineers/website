import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        kabisat: "KabisatDemo",
        dmsans: "DMSans",
        meuemontreal: "NeueMontreal",
        heading: ["NeueMontreal"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "rgb(209 213 219)",
            "--tw-prose-headings": "rgb(255 255 255)",
            "--tw-prose-lead": "rgb(156 163 175)",
            "--tw-prose-links": "rgb(102 54 247)",
            "--tw-prose-bold": "rgb(255 255 255)",
            "--tw-prose-counters": "rgb(156 163 175)",
            "--tw-prose-bullets": "rgb(75 85 99)",
            "--tw-prose-hr": "rgb(55 65 81)",
            "--tw-prose-quotes": "rgb(209 213 219)",
            "--tw-prose-quote-borders": "rgb(55 65 81)",
            "--tw-prose-captions": "rgb(156 163 175)",
            "--tw-prose-code": "rgb(102 54 247)",
            "--tw-prose-pre-code": "rgb(229 231 235)",
            "--tw-prose-pre-bg": "rgb(17 24 39)",
            "--tw-prose-th-borders": "rgb(55 65 81)",
            "--tw-prose-td-borders": "rgb(75 85 99)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
