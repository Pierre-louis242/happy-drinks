import React, { Component } from 'react'

class Favoris extends Component {

    render() {
        return (
            <div className="favoris" >
                <i 
                className="fas fa-star" 
                onClick={()=> this.props.addFavoris()} 
                style={{color: this.props.backgroundcolor}}>
                </i>
            </div>
        );
    }
}

export default Favoris;