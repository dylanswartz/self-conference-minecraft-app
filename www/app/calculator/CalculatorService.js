var calculatorModule = angular.module('calculatorModule', []);
    calculatorModule.factory('CalculatorService', function() {
    return {
        calculateNetherCoordinate: function (overworldCoord, netherCoord) {
            var ratio = {x:8, y:1, z:8};
            return overworldCoord / ratio[netherCoord];
        }
    };
});