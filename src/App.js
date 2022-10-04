import React, {  useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';
import LayoutDefault from './layouts/LayoutDefault';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from "./views/Homepage";
import Ecosystem from "./views/Ecosystem";
import "react-multi-carousel/lib/styles.css";
import Terp from "./views/Terp";
import Faq from "./views/Faq";

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        })
    },[]);

    let location = useLocation();

    useEffect(() => {
        const page = location.pathname;
        document.body.classList.add('is-loaded')
        trackPage(page);
    }, [location]);

  return (

        <Switch>
            <AppRoute exact path="/" component={Homepage} layout={LayoutDefault} />
            <AppRoute exact path="/ecosystem" component={Ecosystem} layout={LayoutDefault} />
            <AppRoute exact path="/Terp" component={Terp} layout={LayoutDefault} />
            <AppRoute exact path="/faq" component={Faq} layout={LayoutDefault} />
        </Switch>
  );
};

export default App;