/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

import { GithubIcon } from "lucide-react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import FilterProvider from "./contexts/FilterContext";

function App() {
  return (
    <>
      <FilterProvider>
        <a href='https://github.com/ariigrangetto/titidoTs'>
          <GithubIcon />
        </a>
        <Header />
        <FormSection />
      </FilterProvider>
    </>
  );
}

export default App;
