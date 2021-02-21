import React from 'react';

// 이번 섹션에서는 주어진 온도에서 물의 끓는 여부를 추정하는 온도 계산기를 만들어볼 것입니다.

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// 두 번째 Input 추가하기

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e) {
    // this.setState({
    //   temperature: e.target.value,
    // });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    /*
    temperature가 지역 state였을 때는 그 값을 변경하기 위해서 
    그저 TemperatureInput의 this.setState()를 호출하는 걸로 충분했습니다. 
    그러나 이제 temperature가 부모로부터 prop로 전달되기 때문에 
    TemperatureInput은 그 값을 제어할 능력이 없습니다. 
    */

    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//변환 함수 작성하기
//먼저, 섭씨를 화씨로, 또는 그 반대로 변환해주는 함수를 작성해보겠습니다.

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class State extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default State;
