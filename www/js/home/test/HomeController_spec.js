'use strict';

describe('HomeController', function() {
    var injected, $scope;

    beforeEach(function(){
       module('starter');
        inject(function($rootScope, $controller) {
            injected = {
                $rootScope: $rootScope,
                $controller: $controller
            };
            $scope = $rootScope.$new();
        });
    });

    function createHomeController() {
        injected.$controller('HomeController', {
            $scope: $scope
        });
    }


    describe('these are some tests', function() {

        it('a test that tests a thing', function() {
            expect(true).toBe(true);
        });

        it('derp is herp', function() {
            createHomeController();
            expect($scope.derp()).toBe("herp");
        });

    });

});
