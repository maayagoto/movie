import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { APP_FOLDER_NAME } from '../globals/variables';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Mylist from '../components/Mylist';
import PageNotFound from '../components/PageNotFound';
import Movie from '../components/Movie';



const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
        <div className="wrapper">
    <Header />
      <Nav />
      <Switch>
				<Route path={'/'} exact><Home sort={'popular'} /></Route>
        <Route path={'/toprated'} exact><Home sort={'toprated'} /></Route>
        <Route path={'/nowplaying'} exact><Home sort={'nowplaying'} /></Route>
        <Route path={'/upcoming'} exact><Home sort={'upcoming'} /></Route>
				<Route path={'/about'} exact><About /></Route>
				<Route path={'/mylist'} exact><Mylist /></Route>
        <Route path={'/movie/:id'}><Movie /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
      <Footer />

    </div>
    </Router>  
);


export default AppRouter;
