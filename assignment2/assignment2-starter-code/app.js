(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItemsToBuy();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItems(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items2 = ShoppingListCheckOffService.getItemsAlreadyBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of Buying items
  var items = [
    {
      name: "Pepsi",
      quantity: "10"
    },
    {
      name: "Donats",
      quantity: "20"
    },
    {
      name: "Cookies",
      quantity: "30"
    },
    {
      name: "Chips",
      quantity: "15"
    },
    {
      name: "Cola",
      quantity: "10"
    }
  ];

  var items2 = [];


  service.buyItems = function (itemIndex) {
    var item = {
      name: items[itemIndex].name,
      quantity: items[itemIndex].quantity
    };
    items2.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return items;
  };

  service.getItemsAlreadyBought = function () {
    return items2;
  };
}


})();
