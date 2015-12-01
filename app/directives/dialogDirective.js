app.directive('confirmDialog', function() {
  var dir = {
    restrict: 'E',
    scope: '&',
    templateUrl: 'app/directives/dialogDirective.html',
  };
  return dir;
});
