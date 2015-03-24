/*
 specs/password.controller.spec.js
 */
describe('In order to check the strenght of my passwordas a visitor, I need to see the strong message of the password', function(){

    var myController;
    var $scope;

    beforeEach(function(){
        angular.mock.module('angular-test');

        angular.mock.inject(function($controller, $rootScope){

            $scope = $rootScope.$new();
            myController = $controller('passwordController', {
                $scope: $scope
            });

        })
    });

    describe('I will test grade method', function (){

        it('should be the password weak when I type 123456', function(){

            //GIVEN
            $scope.password = "123456";

            //AND
            $scope.grade();

            //THEN
            expect($scope.strength).toEqual('weak');

        });

        it('should be the password strong when I type 1234563456', function(){

            //GIVEN
            $scope.password = "1234563456ferf";

            //AND
            $scope.grade();

            //THEN
            expect($scope.strength).toEqual('strong');

        });



    });

});