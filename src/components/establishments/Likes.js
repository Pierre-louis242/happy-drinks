import React, { Component } from 'react'

class Likes extends Component {

    render() {
        return (
            <div className="likes" onClick={()=> this.props.addLike()}>
                <i className="fas fa-thumbs-up"></i>
            </div>
        );
    }
}

export default Likes;