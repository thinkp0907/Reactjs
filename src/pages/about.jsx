import React from 'react';

class BusinessName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: '개발자의 품격', region: '제주' };
  }
  changeBrand = () => {
    this.setState({ brand: '동균의 품격' });
  };
  render() {
    return (
      <div>
        <h1>{this.state.brand}</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.changeBrand}
        >
          Change Button
        </button>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <BusinessName />
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    );
  }
}

export default About;
