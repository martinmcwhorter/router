'use strict';

angular.module('phoneKittenPathless.phoneList', []).
    controller('PhoneListController', ['Phone', PhoneListController]);

function PhoneListController(Phone) {
  this.Phone = Phone;
  this.orderProp = 'age';
}

PhoneListController.prototype.activate = function() {
  this.phones = this.Phone.query();
};
