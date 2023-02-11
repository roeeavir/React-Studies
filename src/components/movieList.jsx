import React, { Component } from "react";
import { getMovies, deleteMovie } from "../lib/fakeMovieService";
import { Link } from "react-router-dom";
import { paginate, sort } from "./utils/pagination";
import "./movieList.css"
import Pagenation from "./common/pagenation";
import Filter from "./common/filter";
import MoviesTable from "./moviesTable";
import Search from "./common/search";

class MovieList extends Component {

    constructor(props) {
        super(props);

        const movies = getMovies();

        this.state = {
            movies: movies,
            page: 1,
            genres: [],
            sortColumn: { path: 'title', order: 'asc' }
        };
    }

    setHeader = (updatedCount) => {
        if (updatedCount > 0) {
            return `There are ${updatedCount} movies available`;
        }
        return "There is no shikse here";
    }

    getMoviesToShow = (movies, genres, page, sortColumn) => {
        const filteredMovies = movies.filter(movie => {
            return genres.length === 0 || genres.includes(movie.genre._id)
        })

        const moviesToShow = paginate(sort(filteredMovies, sortColumn), this.props.pageSize, page);

        return { moviesToShow, updatedCount: filteredMovies.length };
    }

    renderList = (moviesToShow, updatedCount, page, genres, sortColumn) => {

        return (
            <div>
                <Link to={"/movies/new"} props={{ handleAddMovie: this.handleAddMovie }} >New Movie</Link>
                <Filter
                    selectedGeneres={genres}
                    handleGenreFilterChange={this.handleGenreFilterChange}
                />
                <Search onChange={this.handleSearchFilter} />
                <MoviesTable
                    onLike={this.handleLike}
                    onDelete={this.handleDeleteMovie}
                    moviesToShow={moviesToShow}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                />
                <Pagenation
                    numOfItems={updatedCount}
                    pageSize={this.props.pageSize}
                    onChangePage={this.handleChangePage}
                    currentPage={page}
                />
            </div>
        )
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].isLiked = !movie.isLiked;
        this.setState({ movies });
    }

    handleDeleteMovie = id => {
        deleteMovie(id);
        const movies = getMovies();
        this.setState({ movies: movies });
    }

    handleChangePage = page => {
        this.setState({ page });
    }

    handleGenreFilterChange = genre => {
        const { genres } = this.state;
        const index = genres.indexOf(genre._id);
        if (index !== -1) {
            genres.splice(index, 1);
        } else if (genre.isAll) {
            genres.splice(0, genres.length);
        } else {
            genres.push(genre._id);
        }

        this.setState({ genres, page: 1 });
    }

    handleSearchFilter = ({ currentTarget }) => {
        const word = currentTarget.value;
        const movies = getMovies().filter(movie => movie.title.toUpperCase().indexOf(word.toUpperCase()) !== -1);
        this.setState({ movies, page: 1, genres: [] });
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn: sortColumn });
    }

    render() {
        const { movies, genres, page, sortColumn } = this.state;
        if (!movies) return <p>WAdu hecko m8o</p>;

        const { moviesToShow, updatedCount } = this.getMoviesToShow(movies, genres, page, sortColumn);


        return (
            <div>
                <h1 className="movies-header">{this.setHeader(updatedCount)}</h1>
                {this.renderList(moviesToShow, updatedCount, page, genres, sortColumn)}
            </div>
        )
    }
}

MovieList.defaultProps = {
    pageSize: 4
}

export default MovieList;