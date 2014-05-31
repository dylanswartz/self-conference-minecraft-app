(function(angular) {
    var module = angular.module('calculator.controller', ['calculator']);

    module.controller('CalculatorController', ['$scope',
        function($scope) {
            $scope.nether;

            $scope.calculate = function() {
                $scope.nether = {
                    x: 2,
                    y: 5,
                    z: 2
                };
            };
        }
    ]);

})(this.angular);