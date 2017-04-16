angular.module('video-player')
.controller('VideoListCtrl', function () {
})
.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    controller: 'VideoListCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html'
  };
});
