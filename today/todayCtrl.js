angular.module("weatherApp")
.controller("todayCtrl", function($scope, mainService){
  var defaultZip = "84606";
  mainService.getTodayWeather(defaultZip).then(function(response){
    $scope.weather = response.data;
  })

  $scope.getWeather = function(zip){
    mainService.getTodayWeather(zip).then(function(response){
      $scope.weather = response.data;
    })
  }
})
