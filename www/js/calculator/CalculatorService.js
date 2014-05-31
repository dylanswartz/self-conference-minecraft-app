var calculatorModule = angular.module('calculatorModule', []);
    calculatorModule.factory('CalculatorService', function() {
    return {
        calculateX: function(x) {
            return x / 8;
        },
        calculateZ: function(z) {
            return z / 8;
        }
    };
});