import Home from "./Home"
import "./App.css"

function Data(prop) {
  console.log(prop)

  return(
    <>
      <h2>College Name : {prop.obj}</h2>
    </>
  )
}
function Player(data){
  return(
    <>
    <h2>List of players</h2>
    <div className="players-grid">
      {data.obj1.map((player) => (
        <article className="player-card" key={player.name}>
          <h3>{player.name}</h3>
          <p>Team: {player.Team}</p>
        </article>
      ))}
    </div>
    </>
  )
};


function App() {
  let players_data=[{
    name:"Kohli",
    Team:"India"
    },
    {
      name:"Dhoni",
      Team:"India"
    },
    {
      name:"Sachin",
      Team:"India"
    }]
  return(
    <div>
      <h2>Welcome to App</h2>
      <Home/>
      <Data obj = "Sece"/>
      <Player obj1 = {players_data}/>
    </div>
  );
}


export default App;