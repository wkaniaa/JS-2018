angular.module('myApp.controllers').controller('dochodyCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading `dochody` controller');
            $scope.M = {};
            $scope.dane = [
                {pesel: 'AA11', name: 'Koepka', dochod: 413},
                {pesel: 'VA11', name: 'Rose', dochod: 461},
                {pesel: 'VA11', name: 'Johnson', dochod: 362},
                {pesel: 'VA11', name: 'Thomas', dochod: 377}
            ]


            /////////////////////////////////////////////////////////////


        }
    ]
);
