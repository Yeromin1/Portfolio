import SplashScreen from "./components/SplashScreen/SplashScreen.jsx";
import useSplashScreen from "./hooks/useSplashScreen.js";
import Layout from "./Layout/Layout.jsx";

const App = () => {
  const loading = useSplashScreen(3000);

  return loading ? <SplashScreen /> : <Layout />;
};

export default App;
