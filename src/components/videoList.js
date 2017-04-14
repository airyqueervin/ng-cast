angular.module('video-player')
// .controller('VideoListCtrl', ['$scope', function ($scope) 
// {
//   $scope.videos = window.exampleVideoData;
// }])
.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html'
  };

});
