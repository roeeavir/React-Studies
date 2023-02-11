import React from "react";

const Like = ({ onLike, isLiked }) => {

    const mase = isLiked ? "Yahabibi" : "Eize lamlam"

    return (
        <span onClick={() => onLike()}>{mase}</span>
    )
}

export default Like;