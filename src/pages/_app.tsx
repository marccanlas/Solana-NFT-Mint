import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { SolanaProvider } from '@/context';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SolanaProvider>
        <ToastContainer theme="colored" />
        <Component {...pageProps} />
      </SolanaProvider>
    </ThemeProvider>
  );
}
