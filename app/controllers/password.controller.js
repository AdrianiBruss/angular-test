app.controller('passwordController', function($scope){
    $scope.password = '';
    $scope.strenght = 'weak';

    $scope.grade = function(){

        var size = $scope.password.length;
        if(size > 10){
            $scope.strenght = 'strong';
        }else if (size > 8 ){
            $scope.strenght = 'medium';
        }else{
            $scope.strenght = 'weak';
        }
    }
});