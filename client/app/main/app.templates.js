angular.module('app.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../app/partials/common/landing/landing.html",
    "<md-content>{{vm.greeting}}</md-content>");
}]);
