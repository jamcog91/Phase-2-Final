import { useState } from "react";
import { Form } from "semantic-ui-react";


export default function BodyForm(){

    //all the states that the form will use
  const [nameImput, setNameImput] = useState('')
  const [hpImput, setHpImput]= useState()
  const [frontSprite, setFrontSprite]= useState('')
  const [backSprite, setBackSprite]= useState('')

  //creates a new empty pokemon object
  const newPokemon ={
    name: nameImput,
    hp: hpImput,
    sprites: {
      front: frontSprite,
      back: backSprite
    }
  }

  //POSTs the new pokemon to the server 
  async function handlePost(){
    const req = await fetch('http://localhost:3001/pokemon',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newPokemon)
    })
    const res = await req.json()
    //adds the enw pokemon to the front of the page 
    // setPokemonArray([res, ...pokemonArray])
  }

    return(
        <div>
            <h3>Add a Pokemon!</h3>
            <Form
                onSubmit={(e) => {
                e.preventDefault()
                // calls the post function when we submit the form
                handlePost()
                }}
            >
                <Form.Group widths="equal">
                <Form.Input fluid label="planetName" placeholder="Planet Name" name="name"  onChange={(e) => setNameImput(e.target.value)}/>
                <Form.Input fluid label="distance from" placeholder="hp" name="hp" onChange={(e) => setHpImput(e.target.value)}/>
                <Form.Input
                    fluid
                    label="Front Image URL"
                    placeholder="url"
                    name="frontUrl"
                    onChange={(e) => setFrontSprite(e.target.value)}
                />
                <Form.Input
                    fluid
                    label="Back Image URL"
                    placeholder="url"
                    name="backUrl"
                    onChange={(e) => setBackSprite(e.target.value)}
                />
                </Form.Group>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
  );

}