import { useEffect, useState } from "react";
import ContactInput from "./components/ContactInput";
import DataBox from "./components/DataBox";
import DateInput from "./components/DateInput";
import Loader from "./components/Loader";
import NameInput from "./components/NameInput";
import Layout from "./components/Layout";

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
              <NameInput />
            </div>
            <div className="main__center">
              <DateInput />
              <ContactInput />
            </div>
            <div className="main__right">
              <ContactInput />
              <DataBox />
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default App;
