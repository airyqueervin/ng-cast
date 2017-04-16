angular.module('video-player')
.controller('AppCtrl', function () {
  this.videos = exampleVideoData;
  this.currentVideo = this.videos[0];
})
.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});
