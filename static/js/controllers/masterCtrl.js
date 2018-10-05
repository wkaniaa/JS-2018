
angular.module('myApp.controllers',[]);


angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            $scope.M = {};
            $scope.M.results = [];
            $scope.search = {};




            $scope.callSomeHttp = function(){
                return $http({
                    url: 'http://google.com/cleanup',
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                }).success(function(data){
                    $log.info('Google DB deleted');
                });
            };

            ////// INIT STATE

            $scope.M.results = [
                {imie:'Ariel', nazwisko:'Wrong', score:11}];

        }
    ]
);
