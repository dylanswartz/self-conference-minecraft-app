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

    describe('calculateNetherCoordinate', function() {

        it('converts x overworld value 8 to nether value of 1', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(8, 'x')).toBe(1);
        });

        it('converts x overworld value 0 to nether value of 0', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(0, 'x')).toBe(0);
        });

        it('converts x overworld value 16 to nether value of 2', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(16, 'x')).toBe(2);
        });

        it('converts z overworld value 8 to nether value of 1', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(8, 'z')).toBe(1);
        });

        it('converts z overworld value 0 to nether value of 0', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(0, 'z')).toBe(0);
        });

        it('converts z overworld value 16 to nether value of 16', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(16, 'z')).toBe(2);
        });

        it('converts y overworld value 0 to nether value of 0', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(0, 'y')).toBe(0);
        });

        it('converts y overworld value 42 to nether value of 42', function() {
            expect(injected.CalculatorService.calculateNetherCoordinate(42, 'y')).toBe(42);
        });

    });


});
