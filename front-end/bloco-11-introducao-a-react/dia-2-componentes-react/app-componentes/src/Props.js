import React from "react";
import Alfabeto from "./Array";

class Props extends React.Component {
  render() {
    return (
      <div>
        <h1>Fazendo um {this.props.text}</h1>

        <p> {Alfabeto[7]} </p>
      </div>
    );
  }
}

export default Props