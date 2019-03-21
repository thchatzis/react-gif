import React, { Component } from 'react';

class Results  extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.length > 0 &&
                    <h3>Results</h3>
                }
                {this.props.gifs.map(gif => {
                    console.log(gif);
                    return (
                        <a href={gif.images.preview_gif.url} rel="noopener noreferrer" target="_blank" key={gif.id}>
                            <img 
                            src={gif.images.preview_gif.url}
                            alt={gif.title}
                            />
                        </a>
                    );
                })}
            </div>
        );
    }
}

export default Results;
