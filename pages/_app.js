import { Provider } from "react-redux";
import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    // layout component will show all pages thats way we it like that
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
