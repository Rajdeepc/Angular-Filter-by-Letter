var app = angular.module('myapp', []);
app.controller('people', function ($scope, $http) {
    $http.get('http://demo6727947.mockable.io/bangaloredata')
        .success
        (function (data) {
            $scope.peopledata = data;
        });
});
app.filter('filterbyName', function () {
    return function (elem) {
        var scope = this;
        if (!scope.searchText) return true;
        return elem.name.toLowerCase().indexOf(scope.searchText.toLowerCase()) == 0;
    };
});

