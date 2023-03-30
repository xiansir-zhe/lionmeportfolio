import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
      <Header />
      <Hero />
      </div>
      <Expertise />
      <Experience />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
