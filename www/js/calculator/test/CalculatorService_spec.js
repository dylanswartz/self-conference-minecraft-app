'use strict';

describe('CalculatorService', function() {
    var injected, $scope;

    beforeEach(function(){
        module('calculatorModule');
        inject(function($rootScope, CalculatorService) {
            injected = {
                $rootScope: $rootScope,
                CalculatorService: CalculatorService
            };
            $scope = $rootScope.$new();
        });
    });

    describe('these are some tests', function() {

        it('converts x overworld value 8 to nether value of 1', function() {
            expect(injected.CalculatorService.calculateX(8)).toBe(1);
        });

    });

});
