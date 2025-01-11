import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const AddEditStockModal = ({ isOpen, toggle, stockToEdit, onSave }) => {
  const [stock, setStock] = useState(stockToEdit || { name: '', ticker: '', quantity: 0, buyPrice: 0 });

  useEffect(() => {
    setStock(stockToEdit || { name: '', ticker: '', quantity: 0, buyPrice: 0 });
  }, [stockToEdit]);

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = stock._id ? axios.put : axios.post;
    const url = stock._id ? `http://localhost:5000/api/stocks/${stock._id}` : 'http://localhost:5000/api/stocks';

    request(url, stock)
      .then(response => {
        onSave();
        toggle();
      })
      .catch(error => console.error(error));
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{stock._id ? 'Edit Stock' : 'Add Stock'}</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={stock.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="ticker">Ticker</Label>
            <Input type="text" name="ticker" id="ticker" value={stock.ticker} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input type="number" name="quantity" id="quantity" value={stock.quantity} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="buyPrice">Buy Price</Label>
            <Input type="number" name="buyPrice" id="buyPrice" value={stock.buyPrice} onChange={handleChange} />
          </FormGroup>
          <Button color="primary" type="submit">{stock._id ? 'Update' : 'Add'} Stock</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddEditStockModal;