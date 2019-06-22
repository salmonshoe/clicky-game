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

  shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle;
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  countRapper = id => {
    // Filter this.state.rappers for rappers with an id not equal to the id being counted
    const rappers = this.state.filteredRappers.filter(rapper => rapper.id !== id);
    const oldScores = this.state.scores;
    const rapperIdsNotClicked = this.state.filteredRappers.map((rapper) => rapper.id);
    let setRappers = [...rappers]

    if(rapperIdsNotClicked.includes(id)) {
      oldScores.userScore++;
      setRappers = [...rappers]
      //console.log(setRappers);
    }
    else {
      for(let key in oldScores) {
        oldScores[key] = 0;
      }
      setRappers = [...this.state.rappers]
    }

    setRappers = this.shuffleArray([...setRappers]);
    console.log(setRappers);
    
    this.setState({ filteredRappers: setRappers, scores: oldScores});
  };

  // Map over this.state.rappers and render a rapperCard component for each rapper object
  render() {
    return (
      <Wrapper>
        <Navbar scores={this.state.scores} />
        <Header />
        {this.shuffleArray(this.state.rappers.map(rapper => (
          <RapperCard
            countRapper={this.countRapper}
            id={rapper.id}
            key={rapper.id}
            name={rapper.name}
            image={rapper.image}
          />
        )))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
