angular.module('demo', [])
.controller('geo', function($scope, $http) {
    $http.get('http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=papitomaster').
        then(function(response) {
            $scope.citiesJSON = response.geonames;
        });
});