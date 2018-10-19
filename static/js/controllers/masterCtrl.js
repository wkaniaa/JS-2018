
angular.module('myApp.controllers',[]);


angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            $scope.M = {};
            $scope.M.results = [];
            $scope.search = {};
            $scope.iloraz = 0;

            $scope.AABB = 12; //to jest liczba
            $scope.nazwaArtykulu = 'BREAKING NEWS'; //to jest napis

            $scope.callSomeHttp = function(){
                return $http({
                    url: 'http://google.com/cleanup',
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }).success(function(data){
                    $log.info('Google DB deleted');
                });
            };

            $scope.wyliczIloraz = function(xxx, yyy) {
                $scope.iloraz = xxx / yyy;
            };


            ////// INIT STATE
            //można załadować z https://jsonplaceholder.typicode.com/posts
            $scope.M.results = [
                {imie:'Ariel', nazwisko:'Wrong', score:11},
                {imie:'Ban', nazwisko:'Xiao', score:10},
                {imie:'Wong', nazwisko:'Li', score:88},
            ];

            /////////////////////////////////////////////////////////////

        }
    ]
);
