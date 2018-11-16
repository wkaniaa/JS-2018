angular.module('myApp.controllers').controller('thirdCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};
            $scope.userCount = 0;
            $scope.avgScore = 0;
            $scope.bestScore = 0;

            // Deklaracja tablicy uczestników z początkowymi danymi
            $scope.uczestnicy = [
                {
                    'imie' : 'Tadeusz',
                    'nazwisko' : 'Zakorczmenny',
                    'wynik' : 3.5
                }, {
                    'imie' : 'Jacek',
                    'nazwisko' : 'Nowakowski',
                    'wynik' : 2.0
                }, {
                    'imie' : 'Sylwia',
                    'nazwisko' : 'Polak',
                    'wynik' : 3.0
                }
            ];

            $scope.dodajUsera = function (imie, nazwisko, wynik) {
                console.log('Dodaję usera ' + nazwisko);
                $scope.uczestnicy.push({
                    'imie': imie,
                    'nazwisko': nazwisko,
                    'wynik': wynik
                });
            };



            $scope.sortNazwisko = function () {
                $scope.uczestnicy.sort((a, b) => {
                    return (a.nazwisko > b.nazwisko);
                })
            }






        }
    ]
);
