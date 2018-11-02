angular.module('myApp.controllers').controller('secondCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};

            $scope.M.bokA = 0;
            $scope.M.bokB = 0;
            $scope.M.bokC = 0;

            $scope.sprawdzTrojkat = function() {
                // $scope.xxx = (Math.random() * 10);

                // == oznacza sprawdzenie czy lewa storna równa się prawej
                let a = parseInt($scope.M.bokA);
                let b = parseInt($scope.M.bokB);
                let c = parseInt($scope.M.bokC);


                console.log('Abra kadabra');
                console.log('typ a to ' + (typeof a));

                // A + B > C
                if (a + b <= c) {
                    $scope.M.wynik = 'Trójkąt nie istnieje';
                    return;
                }

                // A + C > B
                if (a + c <= b) {
                    $scope.M.wynik = 'Trójkąt nie istnieje';
                    return;
                }
                // B + C > A
                if (b + c <= a) {
                    $scope.M.wynik = 'Trójkąt nie istnieje';
                    return;
                }


                $scope.M.wynik = 'OK -- trójkąt istnieje';
            };

            $scope.liczbaMniejsza = function () {
                let a = parseInt($scope.A);
                let b = parseInt($scope.B);

                if (a<b) {
                    $scope.M.wynik = 'Mniejsza liczba to:' + a;
                }
                if (a>=b) {
                    $scope.M.wynik = 'Mniejsza liczba to:' + b;
                }
            };


        }
    ]
);
