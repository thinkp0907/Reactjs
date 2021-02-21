import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// 특수화
// 함수 컴포넌트 합성
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

// 클래스 컴포넌트 합성
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }
  handleSignUp(e) {
    if (e.target.value === '') {
      alert('Please Enter Your Name..');
    } else {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

  render() {
    return (
      <fieldset>
        <input value={this.state.login} onChange={this.handleChange} />
        <button value={this.state.login} onClick={this.handleSignUp}>
          Sign Me UP!
        </button>
      </fieldset>
    );
  }
}

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

class Composition extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { login: '' };
  //     this.onhandleChange = this.onhandleChange.bind(this);
  //     this.onhandleSignUp = this.onhandleSignUp.bind(this);
  //   }
  //   onhandleChange(e) {
  //     this.setState({ login: e });
  //   }
  //   onhandleSignUp() {
  //     alert(`Welcome aboard, ${this.state.login}!`);
  //   }
  render() {
    // const login = this.state.login;
    return (
      <div>
        <SignUpDialog
        //   value={login}
        //   onhandleSignUp={this.onhandleSignUp}
        //   onhandleChange={this.onhandleChange}
        />
      </div>
    );
  }
}

export default Composition;
