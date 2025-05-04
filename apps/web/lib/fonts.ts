import localFont from "next/font/local";

const NeuePlak = localFont({
  src: [
    {
      path: "./fonts/NeuePlak-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/NeuePlak-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  variable: "--font-neue-plak",
  display: "swap",
});

const Roslindale = localFont({
  src: [
    {
      path: "./fonts/RoslindaleDspCd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: [
    "ui-serif",
    "Georgia",
    "Cambria",
    "Times New Roman",
    "Times",
    "serif",
  ],
  variable: "--font-roslindale",
  display: "swap",
});

export { NeuePlak, Roslindale };
