import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'ASZownCUsRmhFxAl2GPsIRE41ykAveHA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{

    state = {
        reviews: []
    }

    componentDidMount(){
        this.callAPI()
    }

    callAPI(){
        fetch(URL)
        .then(response=>response.json())
        // .then(data=> {console.log(data.results)})
        .then(data=> this.setState({reviews: data.results}))
        // .then(data=> {console.log(this.state.reviews)})
    }

    render(){
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default LatestMovieReviewsContainer


// ASZownCUsRmhFxAl2GPsIRE41ykAveHA
// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<your-api-key> 
// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=ASZownCUsRmhFxAl2GPsIRE41ykAveHA

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ