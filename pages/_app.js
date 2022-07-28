import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // layout component will show all pages thats way we it like that
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
