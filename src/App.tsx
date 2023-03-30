import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import DesktopMobile from "./components/Background/DesktopMobile";
import { FC } from 'react';

const App:FC = ():JSX.Element => {
  return (
    <div className="App">
      <DesktopMobile />
      <div className="Layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
