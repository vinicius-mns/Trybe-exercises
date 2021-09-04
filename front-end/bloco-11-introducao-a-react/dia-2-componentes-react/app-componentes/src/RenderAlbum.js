import React from "react";

class RenderAlbum extends React.Component {
  render() {
    return (
      <div>
        <img src={ this.props.album.image } alt={ this.props.album.title}></img>
        <h2>{ this.props.album.title }</h2>
      </div>
    );
  }
}

export default RenderAlbum