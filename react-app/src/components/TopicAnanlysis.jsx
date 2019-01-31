import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TopicAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {}
  renderDescription() {
    if (this.state.value === "2") {
      return (
        <div>
          <b>ProjectedGraph</b> selected. Please fill in the necessary inputs
          and call the service when ready using the call service button at the
          end of the input fields.
        </div>
      );
    } else if (this.state.value === "1") {
      return (
        <div>
          <b>BipartiteGraph</b> selected. Please fill in the necessary inputs
          and call the service when ready using the call service button at the
          end of the input fields.
        </div>
      );
    } else {
      return (
        <div>
          <i>Nothing selected. plese select a service above.</i>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: "20px" }} className="container">
          <div className="row">
            <div className="col-md-5" style={{ fontSize: "13px" }}>
              {" "}
              <h2>Topic Analysis</h2>
              <p style={{ marginTop: "20px" }}>Short Service description ...</p>
              <div>
                <a href="#">Service specs - Github</a>
              </div>
              <a href="#">Code - Github</a>
              <form
                className="form"
                style={{ marginTop: "10px" }}
                onSubmit={this.handleSubmit}
              >
                <select
                  style={{ marginTop: "25px" }}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="0">Select service</option>
                  <option value="1">Bipartite Graph</option>
                  <option value="2">Projected Graph</option>
                </select>
                <div style={{ marginTop: "25px" }}>
                  {this.renderDescription()}
                </div>
                <div style={{ marginTop: "25px" }} className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Source Folder</b>
                    </label>
                  </span>
                </div>
                <div className="form-group">
                  <input type="File" />
                </div>
                <div className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Parameter 1</b>
                    </label>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Parameter 2</b>
                    </label>
                    <input type="text" />
                  </span>
                </div>
                <div className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Parameter 3</b>
                    </label>
                    <input type="text" />
                  </span>
                </div>
                <div style={{ margin: "30px" }}>
                  <button
                    style={{ marginRight: "10px" }}
                    className="btn btn-primary"
                    onClick={() => this.setState({ viewing: 0 })}
                  >
                    Call Service
                  </button>
                  <button className="btn btn-secondary">Reset Inputs</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicAnalysis;
