import React from "react";
import PropTypes from 'prop-types'
import { getGenres } from "../../lib/fakeGenreService";
import "./filter.css"

const Filter = ({ handleGenreFilterChange, selectedGeneres }) => {
    const all = { _id: "332312312312", name: "All Genres", isAll: true };
    const genres = [all, ...getGenres()];

    return (
        <ul className="filter">
            {genres.map(genre => {
                return <li key={genre._id} className={`genre-item${(selectedGeneres.length === 0 && genre.isAll) || selectedGeneres.includes(genre._id) ? "-active" : ""}`}
                    onClick={() => handleGenreFilterChange(genre)}>
                    {genre.name}
                </li>
            })}
        </ul >
    )
}

Filter.propTypes = {
    handleGenreFilterChange: PropTypes.func.isRequired,
    selectedGeneres: PropTypes.array.isRequired
};


export default Filter;