angular.module('video-player')
.controller('VideoListEntryCtrl', function ($scope) {
  $scope.videos = window.exampleVideoData;
  // debugger;
})
.directive('videoListEntry', function() {
  // debugger;
  return {
    // scope: {
    //   videos: '<'
    // },
    // restrict: 'E',
    // controllerAs: 'ctrl',
    // bindToController: true,
    // controller: 'VideoListEntryCtrl',
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
