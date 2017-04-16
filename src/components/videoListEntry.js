angular.module('video-player')
.controller('VideoListEntryCtrl', function() {

})
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    restrict: 'E',
    controller: 'VideoListEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
