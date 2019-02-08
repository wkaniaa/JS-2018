angular.module('myApp.controllers').controller('teacherCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            $scope.M = {};
            $scope.wynik = [];
            // const URL = "https://guam.wsi.edu.pl:1111";
            const URL = "http://basra.wsi.edu.pl:1111";

            $scope.editedTest = {};   //aktualnie edytowany editedTest

            /////////////////////////////////////////////////////////////

            $scope.addQuestion = function () {
                $scope.editedTest.items.push({"from": "", "to": ""});
            };

            $scope.newTest = function () {
                console.log('Tworzę nowy test');
                $scope.editedTest = {items: []};
                for (let i = 0; i<3; i++) {
                    $scope.addQuestion();
                }
            }

            $scope.loadTest = function () {
                $http({
                    url: URL + '/tests',
                    method: 'GET',
                    params: {
                        alias: "dd"
                    }
                }).success(function (dane) {
                    $scope.editedTest = dane;
                });
            };

            //ta funkcja zapisuje podany `editedTest` w systemie backendowym pod adresem `URL`
            $scope.saveTest = function() {
                let testDoZapisania = $scope.editedTest;
                $http({
                    url: URL + '/tests',
                    method: 'POST',
                    data: JSON.stringify(testDoZapisania)
                }).success(function(data){
                    console.log('Test zosatał zapisany');
                });
            }


        }
    ]
);
