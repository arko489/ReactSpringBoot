import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LearningComponent></LearningComponent>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="learningComponent">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      My Hello World
    </div>
  );
}*/

export default App;
