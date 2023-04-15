import "@/styles/globals.css";

import { BACKEND_URL } from "next.config";

import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      {...pageProps}
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
