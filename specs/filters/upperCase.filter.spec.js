/*
 specs/password.controller.spec.js
 */
describe('In order to check the strenght of my passwordas a visitor, I need to see the strong message of the password', function(){

    var myFilter;

    beforeEach(function(){

        angular.mock.module('angular-test');

        angular.mock.inject(function($filter){

            myFilter = $filter('upperCaseFilter');

        })
    });

    describe('I will test the upperCaseFilter', function (){

        it('should set the letters in the right way', function(){

            expect(myFilter('aDriaNo')).toEqual('Adriano');
            expect(myFilter('CACA')).toEqual('Caca');
            expect(myFilter('FaiCH')).toEqual('Faich');

        });

    });

});
