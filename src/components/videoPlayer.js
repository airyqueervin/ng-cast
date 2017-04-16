angular.module('video-player')
.controller('VideoPlayerController', function() {
  this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  };
})
.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    restrict: 'E',
    controller: 'VideoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
