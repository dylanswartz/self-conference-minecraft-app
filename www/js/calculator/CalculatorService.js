var calculatorModule = angular.module('calculatorModule', []);
    calculatorModule.factory('CalculatorService', function() {
    return {
        calculateX: function(x) {
            return x / 8;
        }
    };
});