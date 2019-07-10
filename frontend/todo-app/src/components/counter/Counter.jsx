import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super(); //Error 1 :easy to make mistake here, must call super() first
        
        this.state = {
            counter : 0,
        }

        //you need to bind function to the class b4 you use it, if its an arrow func then nvm
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="App">
            <CounerButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounerButton>
            <CounerButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounerButton>
            <CounerButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounerButton>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

    /**
     * Update State
     * counter++
     */
    //increment = () => {
    increment(by){
        //console.log(`increment from child - ${by}`);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    /**
     * Update State
     * counter--
     */
    //decrement = () => {
    decrement(by){
        //console.log(`increment from child - ${by}`);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset() {
        this.setState({counter: 0});
    }

}

class CounerButton extends Component {

    /**
     * Define the initial state in a counstructor
     * state => counter 0
     */
    constructor() {
        super(); //Error 1 :easy to make mistake here, must call super() first
        this.state = {
            counter : 0,
        }

        //you need to bind function to the class b4 you use it, if its an arrow func then nvm
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }

    
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by} </button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by} </button>
                {/*<span className="count">{this.state.counter}</span>*/}
              </div>
        );
    }

    /**
     * Update State
     * counter++
     */
    /*increment(){
        //console.log('increment');
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return {counter: this.state.counter + this.props.by}
            }
        );

        this.props.incrementMethod(this.props.by);
        
    }*/

    /**
     * Update State
     * counter--
     */
    /*decrement(){
        //console.log('increment');
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return {counter: this.state.counter - this.props.by}
            }
        );

        this.props.decrementMethod(this.props.by);
        
    }*/
}

/**
 * Set class props a default value
 */
CounerButton.defaultProps = {
    by : 1
}

/**
 * Check type of class props
 */
CounerButton.propTypes = {
    by: PropTypes.number
}

export default Counter;