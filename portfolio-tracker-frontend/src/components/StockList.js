import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

const StockList = ({ stocks, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/stocks/${id}`)
      .then(() => onDelete())
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Stock Portfolio</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.buyPrice}</td>
              <td>
                <Button color="warning" onClick={() => onEdit(stock)}>Edit</Button>{' '}
                <Button color="danger" onClick={() => handleDelete(stock._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StockList;