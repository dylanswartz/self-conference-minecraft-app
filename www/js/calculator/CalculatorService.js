var calculatorModule = angular.module('calculatorModule', []);
    calculatorModule.factory('CalculatorService', function() {
    return {
        calculateXandZ: function(overworldCoordinate) {
            return overworldCoordinate / 8;
        }
    };
});