import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddStock = () => {
  const [stock, setStock] = useState({ name: '', ticker: '', quantity: 0, buyPrice: 0 });

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/stocks', stock)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <Form className="container mt-4" onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="ticker">Ticker</Label>
        <Input type="text" name="ticker" id="ticker" placeholder="Ticker" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="quantity">Quantity</Label>
        <Input type="number" name="quantity" id="quantity" placeholder="Quantity" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="buyPrice">Buy Price</Label>
        <Input type="number" name="buyPrice" id="buyPrice" placeholder="Buy Price" onChange={handleChange} />
      </FormGroup>
      <Button color="primary" type="submit">Add Stock</Button>
    </Form>
  );
};

export default AddStock;