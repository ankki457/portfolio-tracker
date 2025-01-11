import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Dashboard = ({ portfolio, onAdd }) => {
  return (
    <Card className="mt-4">
      <CardBody>
        <CardTitle tag="h5">Portfolio Dashboard</CardTitle>
        <CardText>Total Portfolio Value: ${portfolio.totalValue}</CardText>
        {portfolio.topStock && <CardText>Top Performing Stock: {portfolio.topStock.name} (${portfolio.topStock.value})</CardText>}
        <Button color="primary" onClick={onAdd}>Add Stock</Button>
      </CardBody>
    </Card>
  );
};

export default Dashboard;