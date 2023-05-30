import Choices from "./Choices";
function Players() {
 
    const potentialPlayers = [
      {
        name: "Spellmaster",
        health: 90,
        power: 15,
        accuracy: 60
      }, {
        name: "Jalapeno on a stick",
        health: 70,
        power: 25,
        accuracy: 90
      }, {
        name: "Corndog",
        health: 80,
        power: 20,
        accuracy: 80,
      }, {
        name: "Evil algebra man",
        health: 40,
        power: 35,
        accuracy: 95
      }
    ]
    return (
      <>
        <h2>These are my Players!</h2>
        {potentialPlayers.map(player => {
          return <Choices choice={player} />
        })}
      </>
  )
}

export default Players;

//can delete entire component as demo