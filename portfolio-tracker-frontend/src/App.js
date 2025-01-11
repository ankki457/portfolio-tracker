import React, { useState, useEffect } from 'react';
import AppNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddEditStockModal from './components/AddEditStockModal';
import StockList from './components/StockList';
import axios from 'axios';

const App = () => {
  const [stockToEdit, setStockToEdit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState({ totalValue: 0, topStock: null });

  const toggleModal = () => setModalOpen(!modalOpen);

  const fetchStocks = () => {
    axios.get('http://localhost:5000/api/stocks')
      .then(response => setStocks(response.data))
      .catch(error => console.error(error));
  };

  const fetchPortfolio = () => {
    axios.get('http://localhost:5000/api/stocks/portfolio')
      .then(response => setPortfolio(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchStocks();
    fetchPortfolio();
  }, []);

  const handleEdit = (stock) => {
    setStockToEdit(stock);
    toggleModal();
  };

  const handleAdd = () => {
    setStockToEdit(null);
    toggleModal();
  };

  const handleSave = () => {
    fetchStocks();
    fetchPortfolio();
    toggleModal();
  };

  return (
    <div>
      <AppNavbar />
      <div className="container">
        <Dashboard portfolio={portfolio} onAdd={handleAdd} />
        <StockList stocks={stocks} onEdit={handleEdit} onDelete={handleSave} />
        <AddEditStockModal isOpen={modalOpen} toggle={toggleModal} stockToEdit={stockToEdit} onSave={handleSave} />
      </div>
    </div>
  );
};

export default App;