(function () {
  var app = angular.module('tempo');
  app.directive('equation', function() {
    return {
      restrict: 'EA',
      scope: {
        math: '@'
      },
      link: function(scope, elem, attrs) {
        scope.$watch('math', function(value) {
          if (!value) return;
          elem.html(value);
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, elem[0]]);
        });
      }
    };
  });
})();

