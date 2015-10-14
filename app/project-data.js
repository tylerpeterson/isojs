
// A file for generating and meteing out dummy data both on the client and the server.

var data = [
  {name: "Mango", count: 20},
  {name: "Apple Banana", count: 20},
  {name: "Asian Guava", count: 20},
  {name: "Avocado", count: 20},
  {name: "Star Apple", count: 20},
  {name: "Egg Fruit", count: 20},
  {name: "Star Fruit", count: 20},
  {name: "Jackfruit", count: 20},
  {name: "Key Lime", count: 20},
  {name: "Kumquat", count: 20},
  {name: "Miracle Fruit", count: 20},
  {name: "Papaya", count: 20},
  {name: "Passion Fruit", count: 20},
  {name: "Coconut", count: 20},
  {name: "Orange", count: 199}
];

module.exports = {
  getData: function () {
    return data;
  }
};