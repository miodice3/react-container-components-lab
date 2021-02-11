import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ASZownCUsRmhFxAl2GPsIRE41ykAveHA&query=';

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(response=>response.json())
        .then(data=> this.setState({reviews: data.results}))
    }

    handleSearchInputChange = (event) =>{
        this.setState({
            searchTerm: event.target.value
        }, ()=> console.log(this.state.searchTerm))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Enter Search Below!</label>{<br></br>}
                    <input 
                        type="text"
                        onChange={this.handleSearchInputChange}
                        >
                    </input>{<br></br>}
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>

        )
    }

}

// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ASZownCUsRmhFxAl2GPsIRE41ykAveHA&query= 
