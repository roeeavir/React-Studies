import React from "react";

const Search = (props) => {

    return (
        <div>
            <input placeholder="Search" onChange={props.onChange} />
        </div>
    )

}

export default Search;