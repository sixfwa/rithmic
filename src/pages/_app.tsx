import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="h-screen mb-auto">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};
export default MyApp;
