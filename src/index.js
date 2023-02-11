import React from "react";
import {
    createRoot
} from "react-dom/client";
// import Counters from "./components/counters";
// import MovieList from "./components/movieList";
import App from "./App"
import {
    BrowserRouter
} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(<BrowserRouter>
    <App />
</BrowserRouter>)
