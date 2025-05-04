import localFont from "next/font/local";

const neuePlak = localFont({
  src: [
    {
      path: "@packages/ui/fonts/NeuePlak-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "@packages/ui/fonts/NeuePlak-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const roslindale = localFont({
  src: [
    {
      path: "@packages/ui/fonts/RoslindaleDspCd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export { neuePlak, roslindale };
