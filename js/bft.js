
var app = angular.module('bftApp',['ng','ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/bftOne',{
      templateUrl:'data/one.html'
    })
    .when('/bftTwo',{
      templateUrl:'data/two.html'
    })
    .when('/bftThree',{
      templateUrl:'data/three.html'
    })
    .when('/bftFour',{
      templateUrl:'data/four.html'
    })
    .when('/bftFive',{
      templateUrl:'data/five.html'
    })
    .when('/bftSix',{
      templateUrl:'data/six.html'
    })
    .when('/bftSeven',{
      templateUrl:'data/seven.html',
      controller:'sevenCtrl'
    })
    .when('/bftMsg',{
      templateUrl:'data/massage.html'
    })
    .otherwise({redirectTo:'/bftOne'})
});



  app.controller('bodyCtrl',['$scope','$location',function($scope,$location){
        $scope.jump = function(desPath){
          $location.path(desPath);
        }
  }]);


  app.controller('headerCtrl',['$scope',function($scope){
    $scope.GW = function(){
     var wang = document.querySelector('#right a .yincang');
      wang.style.display='block';
    };
    $scope.YCGW = function(){
      var wang = document.querySelector('#right a .yincang');
      wang.style.display='none';
    };



    $scope.WX = function(){
      var wang = document.querySelector('#right a .WX');
      wang.style.display='block';
    };
    $scope.YCWX = function(){
      var wang = document.querySelector('#right a .WX');
      wang.style.display='none';
    };




    $scope.nav1 = function(){
      var ul = document.querySelector('#zong ul .li1 ul');
      ul.style.display = 'block';
    };
    $scope.nav1_1 = function(){
      var ul = document.querySelector('#zong ul .li1 ul');
      ul.style.display = 'none';
    };


    $scope.nav2 = function(){
      var ul = document.querySelector('#zong ul .li2 ul');
      ul.style.display = 'block';
    };
    $scope.nav2_1 = function(){
      var ul = document.querySelector('#zong ul .li2 ul');
      ul.style.display = 'none';
    };


    $scope.nav3 = function(){
      var ul = document.querySelector('#zong ul .li3 ul');
      ul.style.display = 'block';
    };
    $scope.nav3_1 = function(){
      var ul = document.querySelector('#zong ul .li3 ul');
      ul.style.display = 'none';
    };


    $scope.nav4 = function(){
      var ul = document.querySelector('#zong ul .li4 ul');
      ul.style.display = 'block';
    };
    $scope.nav4_1 = function(){
      var ul = document.querySelector('#zong ul .li4 ul');
      ul.style.display = 'none';
    };
}]);


app.controller('sevenCtrl',['$scope','$http',function($scope,$http){
  $scope.handleClick = function(){

    console.log($scope.userName);
    console.log($scope.userTel);
    console.log($scope.userEmail);
    console.log($scope.userMsg);
    $http.get('php/user_add.php?name='+$scope.userName+'&tel='+$scope.userTel+'&email='+$scope.userEmail+'&msg='+$scope.userMsg)
         .success(function(data){
          console.log(1);
          console.log(data);
          alert('留言成功')
          })
         .error(function(){
          console.log('2');
          alert('留言失败');
        })
  }

}]);




app.controller('msgCtrl',['$scope','$http',function($scope,$http){

  $http.get('php/msg.php?start=0')
      .success(function(data){
        console.log(data);
        $scope.msgList = data;
      });
}]);







