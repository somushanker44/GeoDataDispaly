import React, { Component } from "react";

import "./App.css";
import Geodatabase from "./table/Geodatabase";
import Map from "./Map";

class App extends Component {
  state = { data: [], latitude: null, longitude: null };

  async componentDidMount() {
    const data = await fetch("https://r4n769pw1n.sse.codesandbox.io/").then(
      res => res.json()
    );
    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
        <Geodatabase
          data={this.state.data}
          displayMap={(latitude, longitude) =>
            this.setState({ latitude, longitude })
          }
        />
        {this.state.latitude && this.state.longitude && (
          <Map
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        )}
      </div>
    );
  }
}

export default App;
