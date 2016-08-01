// angular.module('myapp')
//     .factory('myservice', function ($http, $q) {
//         return {
//             getItems: function () {
//                 return $http.get('http://demo6727947.mockable.io/bangaloredata')
//                     .then(function (response) {
//                         if (typeof response.data === 'object') {
//                             return response.data;
//                         } else {
//                             return $q.reject(response.data);
//                         }
//                     },
//                     function (response) {
//                         // something went wrong
//                         return $q.reject(response.data);
//                     });

//             }
//         }
//     });