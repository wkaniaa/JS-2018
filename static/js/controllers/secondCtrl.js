angular.module('myApp.controllers').controller('secondCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};


        }
    ]
);
