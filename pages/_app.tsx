import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../component/header";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Header /> <Component {...pageProps} />
    </main>
  );
}
