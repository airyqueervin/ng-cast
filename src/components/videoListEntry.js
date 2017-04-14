angular.module('video-player')
.controller('VideoListEntryCtrl', ['$scope', function ($scope) {
  $scope.videos = window.exampleVideoData;
}])
.directive('videoListEntry', function() {
  return {
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
