import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {

    state = {
        movies: [
            {
                title: 'Iron Man',
                id: 'vsmbr34'
            },

            {
                title: 'Indiana Jones',
                id: 'indy221'
            },

            {
                title: 'Bad Boys',
                id: 'bby97'
            },

            {
                title: 'Batman',
                id: 'bat45'
            },

            {
                title: 'Jumanji',
                id: 'jmj112'
            },
        
        ]
    }

    constructor() {
        super();
        console.log(1. + ' lefutás')
    }

    componentWillMount() {
        console.log(2. + ' lefutás');        
    }

    componentDidMount() {
        console.log(4. + ' lefutás');
        
        setTimeout(() => {
            this.setState({
                movies: [...this.state.movies, {title: 'Dolittle', id: 'doit76'}]
            });
        }, 2000);

        setTimeout(() => {
            this.setState({
                movies: this.state.movies.map(movie => ( ( movie.title==='Batman') ? ({...movie, title: 'Incredbible Hulk'}) : ({...movie}) ) )
            });
        }, 4000);
    }

    render() {
        console.log(3. + ' lefutás');
        return(
            <div>
                {this.state.movies.map( (movie, index) => (<Movie movie={movie} key={index}/>) )}
            </div>
        );
    }
}

export default MovieList;