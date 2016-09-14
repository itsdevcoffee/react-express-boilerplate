const customersHelper = (customersList) => {
  return customersList.map((customer) => {
    let age = Math.floor(Math.random() * (35 - 20)) + 20;
    customer.age = age;
    return customer;
  });
};

module.exports = customersHelper;
