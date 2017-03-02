    var app = angular.module('app',['ngRoute','ngSanitize','ionic'])

    app.controller('mainCtrl',['$scope','$ionicSideMenuDelegate','se',function($s,$ionicSideMenuDelegate,se){
        $s.booktype = []
        $s.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $s.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };

        se.getFoodType(function(res){
            $s.booktype = res
        })

        
    }])


    app.config(['$routeProvider','$locationProvider',function($route,$location){
        $route
            .when('/',{
                templateUrl:'./dist/tpl/home.html'
            })
            .when('/foods/:type?',{
                templateUrl:'./dist/tpl/book-list.html',
                controller:'leftMenus'
            })
             //页面一进来访问的路径
            .otherwise({
                redirectTo: '/'
            })

        $location.hashPrefix('')

    }])