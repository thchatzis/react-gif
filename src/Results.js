import React, { Component } from 'react';

class Results  extends Component {
    render() {
        return (
            <div>
                <h3>results</h3>
                {this.props.gifs.map(gif => {
                    return (
                        <img 
                            key={gif.id}
                            src={gif.images.preview_gif.url}
                            alt={gif.title}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Results;
