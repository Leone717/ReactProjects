import React, {Component} from 'react';
import MovieTitle from './MovieTitle';

class Movie extends Component {

    state = {
        a1: true,
        a2: [],
        selected: null,
        title: this.props.movie.title
    }

    onClickHandler = (title) => (event) => {
        this.setState({
            selected: title
        }, ()=> {
            console.log(this.state.selected)
        });
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.movie.title
        });
    }

    render() {

        const { id } = this.props.movie;

        return(
            <div>
                <MovieTitle title={this.state.title} onClickFunc ={this.onClickHandler} />
            <p>{id}</p>
            </div>
        );
    }
        
}

export default Movie;
