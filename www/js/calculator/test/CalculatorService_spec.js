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

    describe('calculateX', function() {

        it('converts x overworld value 8 to nether value of 1', function() {
            expect(injected.CalculatorService.calculateX(8)).toBe(1);
        });

        it('converts x overworld value 0 to nether value of 0', function() {
            expect(injected.CalculatorService.calculateX(0)).toBe(0);
        });

        it('converts x overworld value 16 to nether value of 2', function() {
            expect(injected.CalculatorService.calculateX(16)).toBe(2);
        });

    });

    describe('calculateZ', function() {

        it('converts z overworld value 8 to nether value of 1', function() {
            expect(injected.CalculatorService.calculateZ(8)).toBe(1);
        });

        it('converts z overworld value 0 to nether value of 0', function() {
            expect(injected.CalculatorService.calculateZ(0)).toBe(0);
        });

        it('converts z overworld value 16 to nether value of 16', function() {
            expect(injected.CalculatorService.calculateZ(16)).toBe(2);
        });

    });


});
