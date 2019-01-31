import React, { Component } from "react";

class NetworkAnalysis extends Component {
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
              <h2>Bipartite Graphs</h2>
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
                      <b>Bipartite graph one</b>
                    </label>
                  </span>
                  <label
                    class="radio-inline"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  >
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    Text Input
                  </label>
                  <label class="radio-inline">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    File Input
                  </label>
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>File input</label>
                  </div>
                  <input type="File" />
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>Text input</label>
                  </div>
                  <textarea
                    rows="15"
                    cols="70"
                    placeholder="Sample Input:  8,7"
                  />
                </div>

                <div style={{ marginTop: "25px" }} className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Bipartite graph two</b>
                    </label>
                  </span>
                  <label
                    class="radio-inline"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  >
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    Text Input
                  </label>
                  <label class="radio-inline">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    File Input
                  </label>
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>File input</label>
                  </div>
                  <input type="File" />
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>Text input</label>
                  </div>
                  <textarea
                    rows="15"
                    cols="70"
                    placeholder="Sample Input: 3,4                    "
                  />
                </div>

                <div style={{ marginTop: "25px" }} className="form-group">
                  <span style={{ marginTop: "20px" }}>
                    <label style={{ marginRight: "10px", marginTop: "10px" }}>
                      <b>Graph edges</b>
                    </label>
                  </span>
                  <label
                    class="radio-inline"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  >
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    Text Input
                  </label>
                  <label class="radio-inline">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="inputtype1"
                    />
                    File Input
                  </label>
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>File input</label>
                  </div>
                  <input type="File" />
                </div>
                <div className="form-group">
                  <div>
                    <label style={{ marginRight: "10px" }}>Text input</label>
                  </div>
                  <textarea
                    rows="15"
                    cols="70"
                    placeholder="Sample Input: 3,8;4,7"
                  />
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

export default NetworkAnalysis;
