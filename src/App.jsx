import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";
import Registered from "./components/Registered";
import RegisteredMobile from "./components/RegisteredMobile";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [database, setDatabase] = useState([]);
  const [datareal, setDatareal] = useState([]);

  const addBlankLine = (data) => {
    const blank = {
      nome: " ",
      email: " ",
      nascimento: " ",
      telefone: " ",
    };

    let newData = [...data, blank];

    while (newData.length < 4) {
      const blank = {
        nome: " ",
        email: " ",
        nascimento: " ",
        telefone: " ",
      };

      newData.push(blank);
    }
    return newData;
  };

  const setBlankLine = (data) => {
    setDatareal(addBlankLine(data));
  };

  useEffect(() => {
    axios.get('https://indev-api.onrender.com/registered').then((res) => setDatabase(res.data));
    setBlankLine(database);
  }, [database]);

  const registerRef = useRef();
  const listRef = useRef();
  const contactRef = useRef();
  const topRef = useRef();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const [matchesHeader, setMatchesHeader] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));

    window
      .matchMedia("(min-width: 992px)")
      .addEventListener("change", (e) => setMatchesHeader(e.matches));
  }, []);

  return (
    <div className="app">
      <Header
        registerRef={registerRef}
        listRef={listRef}
        contactRef={contactRef}
        matchesHeader={matchesHeader}
      />
      <Main topRef={topRef} />
      <Register
        registerRef={registerRef}
        database={database}
        setDatabase={setDatabase}
      />
      {matches && (
        <Registered
          listRef={listRef}
          datareal={datareal}
          topRef={topRef}
          matchesHeader={matchesHeader}
        />
      )}
      {!matches && <RegisteredMobile listRef={listRef} datareal={datareal} />}
      <Footer contactRef={contactRef} />
    </div>
  );
};

export default App;
