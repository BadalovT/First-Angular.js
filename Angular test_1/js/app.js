var app = angular.module("App",[]);
app.controller("MainController",function ($scope) {
    
$scope.istifadeciler=[
    {"ad":"Fuad","yas":29},
    {"ad":"Ehmed","yas":35},
    {"ad":"Aliye","yas":93},
    
];
$scope.YeniIstifadeci = function(){
    $scope.istifadeciler.push({
        ad:$scope.ad,
        yas:$scope.yas

    });
    $scope.ad="";
    $scope.yas=""
}
});