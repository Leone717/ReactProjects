import React from 'react';

const MovieTitle = (props) => {
    return <h2 onClick={props.onClickFunc(props.title)}>
        {props.title}</h2>    
}

export default MovieTitle; 