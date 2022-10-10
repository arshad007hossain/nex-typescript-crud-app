import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "styles/scss/global.scss";
import type { AppProps } from "next/app";
import { store } from "../store";
import Layout from "../components/Layout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={1000}/>
      </Layout>
    </Provider>
  );
}

export default MyApp;
