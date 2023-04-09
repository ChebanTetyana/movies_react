// Функціональний підхід

import { useState } from "react";


const InputSearch = (props) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all')
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.searchMovies(search);
        }
    }
    const handleFilter = (e) => {
        setType(e.target.dataset.type)
    }
    return <div className="row">
        <div className="col s12">
            <div className="input-field">
                <input
                    id="email_inline"
                    type="email"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                >
                </input>
                <button onClick={() => props.searchMovies(search, type)}
                    type='button'
                    className="input-btn">search
                </button>
            </div>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='all'
                    onChange={handleFilter}
                    checked={type === 'all'}
                />
                <span>All</span>
            </label>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='movie'
                    onChange={handleFilter}
                    checked={type === 'movie'}
                />
                <span>Movie</span>
            </label>
            <label className="label-radio">
                <input className="with-gap"
                    name="type" type="radio"
                    data-type='series'
                    onChange={handleFilter}
                    checked={type === 'series'}
                />
                <span>Series</span>
            </label>

        </div>
    </div>
}

export default InputSearch;



// Класовий підхід

// import React from 'react'

// class InputSearch extends React.Component {
//     state = {
//         search: '',
//         type: 'all'
//     }

//     handleKey = (event) => {
//         if (event.key === 'Enter') {
//             this.props.searchMovies(this.state.search, this.state.type); 
//         }
//     }

//     handleFilter = (event) => {
//         this.setState(() => ({ type: event.target.dataset.type }), () => {
//             this.props.searchMovies(this.state.search, this.state.type);
//         });
//     }

//     render() {
//        return <div class="row">
       
//           <div class="input-field">
//             <input id="email_inline"
//                 type="search"
//                 class="validate"
//                 placeholder="Enter movie title..."
//                 value={this.state.search}
//                 onChange={(e) => this.setState({ search: e.target.value })}
//                 onKeyDown={this.handleKey}       
//             />    
//                 <button onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
//            </div>
//               <label className="label-radio">
//                 <input class="with-gap" name="group3" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
//                 <span>All</span>
//            </label> 
//             <label className="label-radio">
//                <input class="with-gap" name="group3" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
//                 <span>Movies</span>
//            </label> 
//             <label className="label-radio">
//                 <input class="with-gap" name="group3" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
//                 <span>Series</span>
//            </label> 
           
//         </div>
//     }
// }

// export default InputSearch;