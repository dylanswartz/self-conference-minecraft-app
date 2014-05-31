(function(angular) {
    var module = angular.module('starter');

    module.controller('HomeController', ['$scope',
        function($scope) {

            $scope.derp = function () {
                return "herp";
            }

        }
    ]);

})(this.angular);