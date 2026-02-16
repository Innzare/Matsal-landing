/**
 * plugins/vuetify.ts
 */

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "matsal",
    themes: {
      matsal: {
        dark: false,
        colors: {
          primary: "#EA004B",
          secondary: "#16a34a",
          accent: "#f59e0b",
          background: "#ffffff",
          surface: "#ffffff",
          "surface-variant": "#f9f4f0",
          error: "#ef4444",
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#f59e0b",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "on-background": "#1c1917",
          "on-surface": "#1c1917",
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: "lg",
      elevation: 0,
    },
    VCard: {
      rounded: "xl",
      elevation: 0,
    },
    VTextField: {
      variant: "outlined",
      rounded: "lg",
      density: "comfortable",
    },
    VTextarea: {
      variant: "outlined",
      rounded: "lg",
    },
    VSelect: {
      variant: "outlined",
      rounded: "lg",
      density: "comfortable",
    },
  },
});