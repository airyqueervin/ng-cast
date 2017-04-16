angular.module('video-player', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.googleapis.com/youtube/v3/search/**',
    'https://www.youtube.com/**'
  ]);
});
