import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const defaultState = {
    hp: "",
    name: "",
    frontUrl: "",
    backUrl: ""
  }
  const [formData, setFormData] = useState(defaultState)

  const handleChange = (e) => {

    setFormData((fd) => ({
      ...fd,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          console.log("submitting form...");
          addPokemon(formData)
          setFormData(defaultState)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={formData.name} onChange={handleChange} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" value={formData.hp} onChange={handleChange} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            value={formData.frontUrl} 
            onChange={handleChange}
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            value={formData.backUrl} 
            onChange={handleChange}
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
