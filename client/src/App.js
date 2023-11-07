import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    setTimeout(() => {
      setLoadingPage(false);
    }, 5000);
  }, []);

  console.log(isLoading);

  return (
    <div className="App">
      <LoadingPage isLoading={isLoading} loadingPage={loadingPage} />
      {!loadingPage && (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
