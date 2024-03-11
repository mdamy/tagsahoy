import { useEffect } from "react";
import reactLogo from "../assets/react-logo.svg";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  return (
    <div className="app">
      <div className="app-content">
        <div>
          <img src={reactLogo} className="app-logo" alt="logo" />
          <div className="text">
            <p className="app-link">
              {"This page is powered by your "}
              <a href="/edit/files/web/components/App.jsx" target="_blank" rel="noreferrer">
                web/components/App.jsx
              </a>
            </p>
            <p className="environment">
              This is your <span className={process.env.GADGET_PUBLIC_APP_ENV}>{process.env.GADGET_PUBLIC_APP_ENV}</span> environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
