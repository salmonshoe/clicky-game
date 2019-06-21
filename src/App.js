import React, { Component } from "react";
import Header from './components/Header';
import Navbar from './components/Navbar';
import RapperCard from "./components/RapperCard";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import rappers from "./rappers.json";

class App extends Component {
  // Setting this.state.rappers to the rappers json array
  state = {
    rappers,
    filteredRappers: [...rappers], // clone a new array referencing rappers 
    scores : {
      userScore: 0,
      totalScore: 0  
    }
  };

// ANSWER THESE!
  //1. Difference between rappers, filteredRappers, setRappers and rappersIdsNotClicked
  //2. oldScores vs. scores
  //3. why we should use [...rappers] instead of making a new Object to mimic. Objects didn't work this time around


  countRapper = id => {
    // Filter this.state.rappers for rappers with an id not equal to the id being counted
    const rappers = this.state.filteredRappers.filter(rapper => rapper.id !== id);
    // Set this.state.rappers equal to the new rappers array

    const oldScores = this.state.scores;
    const rapperIdsNotClicked = this.state.filteredRappers.map((rapper) => rapper.id);
    let setRappers = [...rappers]

    if(rapperIdsNotClicked.includes(id)) {
      oldScores.userScore++;
      oldScores.totalScore++;
      setRappers = [...rappers]
    }
    else {
      for(let key in oldScores) {
        oldScores[key] = 0;
      }
      setRappers = [...this.state.rappers]
    }
    console.log(rappers); //to see the changes upon each click

    this.setState({ filteredRappers: setRappers, scores: oldScores });

  };

  // Map over this.state.rappers and render a rapperCard component for each rapper object
  render() {
    return (
      <Wrapper>
        <Navbar scores={this.state.scores} />
        <Header />
        {this.state.rappers.map(rapper => (
          <RapperCard
            countRapper={this.countRapper}
            id={rapper.id}
            key={rapper.id}
            image={rapper.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
