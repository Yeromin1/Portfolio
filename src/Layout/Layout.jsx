import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="max-w-sm mx-auto px-4 md:max-w-3xl md:px-5 lg:max-w-6xl">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
