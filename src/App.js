import React, { Component } from 'react';
import './App.css';

const choices = ['rock', 'paper', 'scissors'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerChoice: null,
      computerChoice: null,
      result: '',
      playerTally: 0,
      computerTally: 0,
      tieTally: 0
    };
  }

  getRandomMove() {
    var move = Math.floor(Math.random() *  choices.length);
    return choices[move];
  }

  choiceClicked(playerChoice) {
    const computerChoice = this.getRandomMove();
    const result = this.determineWinner(playerChoice, computerChoice);
    this.setState({
      playerChoice,
      computerChoice,
      result,
    });
  }

  determineWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
      this.setState((prevState) => ({
        tieTally: prevState.tieTally + 1,
      }));
      return("It's a tie!");
    }
    if(
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock") 
      ) {
        this.setState((prevState) => ({
          playerTally: prevState.playerTally + 1,
        }));
        return "You win!";
      } else {
        this.setState((prevState) => ({
          computerTally: prevState.computerTally + 1,
        }));
        return "Computer wins!";
      }
    }

  render() {
      return (
        <div className = "App">
          <h1>Rock Paper Scissors</h1>
          <h2>by Stefano Farro</h2>

          <div className = "choices">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick ={() => this.choiceClicked(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <div className = "result">
            {(this.state.playerChoice && (
              <div>
              <p>Your choice: {this.state.playerChoice}</p>
              <p>Computer's choice: {this.state.computerChoice}</p>
              <p>Result: {this.state.result}</p>
              </div>
            ))}
          </div>

          <div className = "tally">
              <div>
              <p>Player Wins: {this.state.playerTally}</p>
              <p>Computer Wins: {this.state.computerTally}</p>
              <p>Tied Games: {this.state.tieTally}</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
