import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home/Home";
import AllAnimeLists from "./components/Pages/AllAnimeList/AllAnimeLists";
import AllAnimeListsSort from "./components/Pages/AllAnimeList/AllAnimeListsSort";
import NewSeasons from "./components/Pages/NewSeason/NewSeasons";
import Schedules from "./components/Pages/Schedule/Schedules";
import Contact from "./components/Pages/Footer/Contact";
import About from "./components/Pages/Footer/About";
import Anime from "./components/Anime/Anime/Anime";
import EpisodeAnime from "./components/Anime/AnimeEpisode/EpisodeAnime";
import AnimeAdmin from "./components/Admin/Anime";
import EpisodeAnimeADmin from "./components/Admin/EpisodeAnime";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Route exact path="/" component={Home}></Route>
            <Route
              path="/:title/episode-:episode"
              component={EpisodeAnime}
            ></Route>
            <Switch>
              <Route exact path="/anime-list" component={AllAnimeLists}></Route>
              <Route
                path="/anime-list/:sort"
                component={AllAnimeListsSort}
              ></Route>
              <Route path="/new-season" component={NewSeasons}></Route>
              <Route path="/schedule" component={Schedules}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/about" component={About}></Route>
              <Route exact path="/:title" component={Anime}></Route>
            </Switch>
            <Route
              path="/admin-dainime-1578414650239/anime"
              component={AnimeAdmin}
            ></Route>
            <Route
              path="/admin/episodes-anime"
              component={EpisodeAnimeADmin}
            ></Route>
            <Footer />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
