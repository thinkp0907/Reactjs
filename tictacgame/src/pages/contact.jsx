import React from 'react';

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
      </tr>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = evt => {
    this.setState({ username: evt.target.value });
  };

  doSave = () => {
    alert(this.state.username);
  };

  render() {
    let data = [
      { name: 'A', Email: 'a' },
      { name: 'B', Email: 'b' },
      { name: 'C', Email: 'c' },
    ];
    let row = data.map(row => <Row name={row.name} email={row.Email}></Row>);
    return (
      <div>
        <p>Enter Your Name</p>
        <input type="text" onChange={this.myChangeHandler}></input>
        <button type="button" className="btn btn-primary" onClick={this.doSave}>
          저장
        </button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
