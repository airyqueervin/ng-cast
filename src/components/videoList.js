angular.module('video-player')
// .controller('VideoListCtrl', ['$scope', function ($scope) 
// {
//   $scope.videos = window.exampleVideoData;
// }])
.directive('videoList', function() {
  return {
    // scope: {
    //   videos: '<'
    // },
    // restrict: 'E',
    // controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'src/templates/videoList.html'
  };

});
