import Head from "next/head";
import Home from "../src/templates/Home";

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Home | Framer Animations</title>
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
