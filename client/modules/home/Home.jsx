import React from 'react';
import $ from 'jquery';
import classNames from 'classNames';

require('./home.scss');

class Home extends React.Component {
  constructor(props) {
    super(props);

    // Bind method to this context
    this.getCustomersList = this.getCustomersList.bind(this);

    this.state = {
      customersList: null
    }
  }

  componentDidMount() {
    this.getCustomersList();
  }

  getCustomersList() {
    $.get('http://localhost:1337/api/customers', (data) => {
        this.setState({customersList: data});
        console.log(data);
    });
  }

  render() {
    const { customersList } = this.state;
    let domifiedCustomers;

    if(customersList) {
      domifiedCustomers = customersList.map((customer, i) => {
        return (
          <li key={i}>
            <h4>Name: {customer.name}</h4>
            <h4>Email: {customer.email}</h4>
            <h4>State: {customer.state}</h4>
            <h4>Age: {customer.age}</h4>
          </li>
        );
      });
    }
    return (
      <section id="home">
        <h2>Home</h2>
        <ul>
          {domifiedCustomers}
        </ul>
      </section>
    );
  }
}

module.exports = Home;
