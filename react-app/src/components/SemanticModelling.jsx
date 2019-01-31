import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SemanticModeling extends Component {
  state = {
    submit: false,
    viewing: 0
  };
  renderDetails() {
    if (this.state.viewing === 0) {
      return (
        <React.Fragment>
          <div style={{ padding: "10px" }} class="btn-group" role="group">
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-secondary btn-sm"
              onClick={() => this.setState({ viewing: 0 })}
            >
              Text
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.setState({ viewing: 1 })}
            >
              JSON
            </button>
          </div>
          <div>
            <div className="col-lg-6">
              <form style={{ marginTop: "10px" }}>
                <div className="form-group">
                  <input style={{ width: "50%" }} type="text" />
                </div>
                <div className="form-group">
                  <input style={{ width: "50%" }} type="text" />
                </div>
                <div className="form-group">
                  <small className="form-text">text</small>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div style={{ padding: "10px" }} class="btn-group" role="group">
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-secondary btn-sm"
              onClick={() => this.setState({ viewing: 0 })}
            >
              Text
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.setState({ viewing: 1 })}
            >
              JSON
            </button>
          </div>
          <div />
          <textarea
            style={{ margin: "10px", height: "100px" }}
            className="pre-scrollable"
          />
        </React.Fragment>
      );
    }
  }
  render() {
    if (this.state.submit) {
      return <div>{this.renderDetails()}</div>;
    } else {
      return (
        <div className="col-lg-6">
          <form style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div className="form-group">
              <small style={{ color: "red" }} className="form-text" />
              <label style={{ marginRight: "10px", width: "10%" }}>Query</label>
              <input style={{ width: "70%" }} type="text" />
            </div>
            <div className="form-group">
              <small style={{ color: "red" }} className="form-text" />
              <label style={{ marginRight: "10px", width: "10%" }}>Ans 1</label>
              <input style={{ width: "70%" }} type="text" />
            </div>
            <div className="form-group">
              <small style={{ color: "red" }} className="form-text" />
              <label style={{ marginRight: "10px", width: "10%" }}>Ans 2</label>
              <input style={{ width: "70%" }} type="text" />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.setState({ submit: true })}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

export default SemanticModeling;
