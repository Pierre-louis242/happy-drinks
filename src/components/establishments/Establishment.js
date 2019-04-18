
import React, { Component } from 'react'
import Likes from './Likes'
import Dislikes from './Dislikes'
import Favoris from './Favoris'

class Establishment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeuh  : 0,
            dislikeuh : 0,
            backgroundcolor: 'black',
        }
    }

    addLike = () => {
        this.setState(state => ({
            likeuh : state.likeuh + 1
        }));  
    }

    disLike = () => {
        this.setState(state => ({
            dislikeuh : state.dislikeuh - 1
        })); 
    }

    addFavoris = () => {
        this.setState(state => ({
            backgroundcolor: state.backgroundcolor === 'black' ? 'yellow' : 'black'
        }));
    }
    

    render() {

        return (
            <div className='establishment' >
                <Favoris addFavoris={this.addFavoris} backgroundcolor={this.state.backgroundcolor}/>
                <h3>{ this.props.establishment.name }</h3>
                { this.props.establishment.description }
                <Likes addLike={ this.addLike } />
                <p className="likesCount">{ this.state.likeuh}</p>
                <Dislikes disLike={ this.disLike }/>
                <p className="likesCount">{ this.state.dislikeuh }</p>
            </div>
        );
    }
}

export default Establishment;