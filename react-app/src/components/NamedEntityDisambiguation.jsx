import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NamedEntityDisambiguation extends Component {
  state = {
    viewing: 0
  };

  renderDetails() {
    if (this.state.viewing === 0) {
      return (
        <div>
          <ul style={{ marginTop: "10px" }} className="list-group">
            <li className="list-group-item">
              <a
                style={{ verticalAlign: "middle" }}
                href="#"
                className="material-icons"
              >
                info
              </a>
              &nbsp; Language:
            </li>
            <li className="list-group-item">
              <a
                style={{ verticalAlign: "middle" }}
                href="#"
                className="material-icons"
              >
                info
              </a>
              &nbsp; Named Entities:
            </li>
            <li className="list-group-item">
              <a
                style={{ verticalAlign: "middle" }}
                href="#"
                className="material-icons"
              >
                info
              </a>
              &nbsp; Linked Entities:
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <textarea
          style={{ padding: "10px", height: "100px", marginTop: "10px" }}
          className="pre-scrollable border"
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ marginTop: "10px", marginLeft: "10px" }}>
          <div className="col-lg-5 col-lg-3" style={{ fontSize: "13px" }}>
            <p>
              <textarea rows="15" cols="70" id="comment" />
            </p>
            <button
              style={{
                padding: "10px",
                width: "100%",
                fontWeight: "Bold",
                background: "yellow"
              }}
            >
              Disambiguate
            </button>
          </div>
          <div className="col-lg-3 col-lg-3" style={{ fontSize: "13px" }}>
            {" "}
            <div class="btn-group" role="group">
              <button
                style={{ marginRight: "10px" }}
                className="btn btn-secondary btn-sm"
                onClick={() => this.setState({ viewing: 0 })}
              >
                Analysed Text
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => this.setState({ viewing: 1 })}
              >
                JSON
              </button>
            </div>
            <div>{this.renderDetails()}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NamedEntityDisambiguation;
