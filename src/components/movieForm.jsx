import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../lib/fakeGenreService";
import { saveMovie, getMovie } from "../lib/fakeMovieService";

class MovieForm extends Form {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                title: "",
                genreId: "",
                numberInStock: "",
                dailyRentalRate: "",
            },
            errors: {},
            genres: [],
        }

        this.schema = {
            title: Joi.string().required().label("Title"),
            genreId: Joi.string().required().label("Genre"),
            numberInStock: Joi.number().positive().allow(0).max(100).required().label("Number in Stock"),
            dailyRentalRate: Joi.number().positive().allow(0).max(10).required().label("Rate"),
        }


    }

    componentDidMount() {
        const genres = getGenres().map(genre => { return { value: genre._id, label: genre.name } });
        this.setState({ genres })

        const _id = this.props.match.params._id;
        if (_id === "new") return;

        const movie = getMovie(_id);

        if (!movie) return this.props.history.replace("/not-found")

        this.insertMovieData(movie);

    }

    insertMovieData = movie => {
        const { title, genre, numberInStock, dailyRentalRate } = movie;
        this.setState({
            data: {
                title,
                genreId: genre._id,
                numberInStock,
                dailyRentalRate
            }
        })
    }

    doSubmit = () => {
        const { title, genreId, numberInStock, dailyRentalRate } = this.state.data;
        // Call server
        const movie = {
            title,
            genreId: genreId,
            numberInStock,
            dailyRentalRate
        }
        saveMovie(movie)
        this.props.history.replace('/movies');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelector("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate", "number")}
                    {this.renderSumbitButton("Save")}
                </form>
            </div>
        )
    }

}

export default MovieForm;