// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It''s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.


const team = {
    _players: [{firstName: "Bob", lastName: "Jones", age: 30},
              {firstName: "Sue", lastName: "Garrison", age: 37},
              {firstName: "Joe", lastName: "Smith", age: 37}],
    
    _games: [{opponent: "Bears", teamPoints: 3, opponentPoints: 0},
             {opponent: "Cats", teamPoints: 42, opponentPoints: 5},
             {opponent: "Monsters", teamPoints: 16, opponentPoints: 4}],
    
    get players(){
      return this._players;
    },
    
    get games(){
      return this._games;
    },
    
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
    
  }
  
  team.addPlayer("Steph", "Curry", 28)
  team.addPlayer("Lisa", "Leslie", 44)
  team.addPlayer("Bugs", "Bunny", 76)
  console.log(team._players)
  
  team.addGame("Jokers", 40, 30)
  team.addGame("Penguins", 64, 20)
  team.addGame("Riddlers", 14, 12)
  console.log(team._games)