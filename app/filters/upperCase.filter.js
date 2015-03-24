app.filter('upperCaseFilter', function(){
    'use strict';

    return function(val){

        return val ? val.replace(/\w\S*/g, function(txt){

            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

        }) : val ;

    }

});
