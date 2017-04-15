angular.module('video-player')
.controller('AppCtrl', function () {
  this.videos = exampleVideoData;
})
.directive('app', function() {
  return {
    scope: {
      videos: '<'
    },
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});
