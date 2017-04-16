angular.module('video-player')
.controller('VideoPlayerCtrl', function () {
  this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  };
})
.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: 'VideoPlayerCtrl',
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
