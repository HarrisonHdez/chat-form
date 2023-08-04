import { useEffect, useState } from "react";
import DataBox from "./components/DataBox";
import DateForm from "./components/DateForm";
import Loader from "./components/Loader";
import NameForm from "./components/NameForm";
import Layout from "./components/Layout";
import ContactForm from "./components/FormContact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Layout>
      <main className="main">
        {loading ? (
          <Loader />
        ) : (
          <div className="main__content">
            <div className="main__left">
              <NameForm />
            </div>
            <div className="main__center">
              <DateForm />
              <ContactForm />
            </div>
            <div className="main__right">
              <ContactForm />
              <DataBox />
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default App;
