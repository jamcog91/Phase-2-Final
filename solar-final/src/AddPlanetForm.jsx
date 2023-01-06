import { useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom"

export default function AddPlanetForm(){

    //all the states that the form will use
  const [nameImput, setNameImput] = useState('')
  const [distanceInput, setDistanceInput]= useState()
  const [yearInput, setYearInput]= useState('')
  const [dayInput, setDayInput]= useState('')
  const [imageInput, setImageInput]= useState('')
  const navigate = useNavigate()


  //creates a new empty planet object
  const newPlanet ={
    name: nameImput,
    distanceFromSun: distanceInput,
    lengthOfYear: yearInput,
    lengthOfDay: dayInput,
    image: imageInput
    }
  

  //POSTs the new planet to the server 
  async function handlePost(){
    const req = await fetch('http://localhost:3001/planets',{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newPlanet)
    })
    
  }

    return(
        <div>
            <h3>Add a Planet / Moon</h3>
            <Form
                onSubmit={(e) => {
                e.preventDefault()
                // calls the post function when we submit the form
                handlePost()
                }}
            >
                <Form.Group widths="equal">
                <Form.Input fluid label="planetName" placeholder="Planet Name" name="name"  onChange={(e) => setNameImput(e.target.value)}/>
                <Form.Input fluid label="distanceFromSun" placeholder="Distance From Sun" name="Distance" onChange={(e) => setDistanceInput(e.target.value)}/>
                <Form.Input
                    fluid
                    label="yearLegthn"
                    placeholder="yearLength"
                    name="YearLength"
                    onChange={(e) => setYearInput(e.target.value)}
                />
                <Form.Input
                    fluid
                    label="dayLength"
                    placeholder="dayLength"
                    name="dayLength"
                    onChange={(e) => setDayInput(e.target.value)}
                />
                </Form.Group>
                <Form.Input
                    fluid
                    label="image"
                    placeholder="image"
                    name="image"
                    onChange={(e) => setImageInput(e.target.value)}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
            <button className="Home" onClick={() => navigate("/")}>HOME</button>
        </div>
    );

}