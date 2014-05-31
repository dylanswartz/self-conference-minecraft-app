var calculatorModule = angular.module('calculatorModule', []);
    calculatorModule.factory('CalculatorService', function() {
    return {
        calculateXandZ: function(overworldCoordinate) {
            var ratio = 8;
            return overworldCoordinate / ratio;
        },
        calculateY: function (overworldCoordinate) {
            return overworldCoordinate;
        }
    };
});