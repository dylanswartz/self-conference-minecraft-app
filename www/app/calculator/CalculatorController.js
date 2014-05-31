(function(angular) {
    var module = angular.module('calculator.controller', ['calculator']);

    module.controller('CalculatorController', ['$scope', 'CalculatorService',
        function($scope, CalculatorService) {
            $scope.nether;
            $scope.overworld = {x:"",y:"",z:""};

            $scope.calculate = function() {
                $scope.nether = {
                    x: CalculatorService.calculateNetherCoordinate($scope.overworld.x, 'x'),
                    y: CalculatorService.calculateNetherCoordinate($scope.overworld.y, 'y'),
                    z: CalculatorService.calculateNetherCoordinate($scope.overworld.z, 'z')
                };
            };
        }
    ]);

})(this.angular);