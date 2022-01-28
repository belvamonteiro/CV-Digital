import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Projetos from "./Pages/Projetos/Projetos";
import Home from "./Pages/Home/Home";
import { css } from "@emotion/react";
import { ClockLoader } from "react-spinners";
import SingleCourseDetails from "./Pages/SingleCourseDetails/SingleCourseDetails";
import CheckOut from "./Components/CheckOut/CheckOut";

const override = css;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="animation-box">
          <ClockLoader
            loading={loading}
            size={50}
            color="#35a7df"
            css={override}
          />
        </div>
      ) : (
        <div>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projetos">
                <Projetos />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/courseDetails/:courseId">
                <SingleCourseDetails />
              </Route>
              <Route path="/checkout">
                <CheckOut />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
