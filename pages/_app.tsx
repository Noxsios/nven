import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

// @ts-ignore
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
}
