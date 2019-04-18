import React, { Component } from 'react'

class Dislikes extends Component {
    render() {
        return (
            <div className="likes" onClick={ ()=> this.props.disLike() }>
                <i className="fas fa-thumbs-down"></i>
            </div>
        );
    }
}

export default Dislikes;