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
          primary: "#D1003F",
          secondary: "#15803d",
          accent: "#ea580c",
          background: "#fafaf9",
          surface: "#ffffff",
          "surface-variant": "#f5f5f4",
          error: "#dc2626",
          info: "#2563eb",
          success: "#15803d",
          warning: "#ea580c",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "on-background": "#0c0a09",
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