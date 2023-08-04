import ContactInput from "./components/ContactInput";
import DataBox from "./components/DataBox";
import DateInput from "./components/DateInput";
import FooterBar from "./components/FooterBar";
import NameInput from "./components/NameInput";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />

      <main className="main">
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
      </main>

      <FooterBar />
    </>
  );
};

export default App;
