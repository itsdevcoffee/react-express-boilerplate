import customersHelper from './../lib/customersHelper.js';

const customersController = {};

customersController.get = (req, res) => {
    let customersList = [
      {
          name: "Chris Smith",
          email: "chris@technology.com",
          state: "Texas"
      },
      {
          name: "Tim Shenk",
          email: "tim@energy.com",
          state: "New York"
      },
      {
          name: "Matt Michaels",
          email: "matt@railroads.com",
          state: "California"
      },
      {
          name: "Michael Danielson",
          email: "michael@apps.com",
          state: "Colorado"
      },
      {
          name: "Jasmine Talyi",
          email: "jasmine@asian.com",
          state: "Florida"
      }
    ];

    customersList = customersHelper(customersList);

    res.json(customersList);
};

module.exports = customersController;
