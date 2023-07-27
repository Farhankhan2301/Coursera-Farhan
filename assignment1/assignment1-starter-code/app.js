(function () {

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.stringItem = '';
    $scope.message = '';

    $scope.checkLunch = function () {
      var lunch = $scope.stringItem.split(',');

      if ($scope.stringItem.trim() === ''){
        $scope.message = "Please eneter data first";
      }
      else if(lunch.length <= 3){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too Much!";
      }
    };
  }
})();
