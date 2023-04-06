import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import InputSearch from '../components/InputSearch';


class Main extends React.Component {
    state = {
        movieList : [],
    }
    componentDidMount() {
        let url = 'http://www.omdbapi.com/?apikey=38f13afb&s=terminator';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ movieList: data.Search }))
    }

    searchMovies = (stringSearch, type = 'all') => {
        let url = `http://www.omdbapi.com/?apikey=38f13afb&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ''}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ movieList: data.Search }))
    }

    render() {
        const { movieList } = this.state;
         return <main className = 'main container'>
             <h4>SPA Movies Content</h4> 
             <InputSearch searchMovies={this.searchMovies} />
             {
                 movieList.length ?
                     (<MovieList movieList={this.state.movieList} />)
                     : <Preloader/>   
             }
             
        </main>
    }
}

export default Main;