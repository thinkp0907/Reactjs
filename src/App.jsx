import React from 'react';
import Header from './componetns/layout/header.jsx';
import Content from './componetns/layout/content.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
