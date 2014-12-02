'use strict';

angular.module('fedoraAnnotations.version', [
  'fedoraAnnotations.version.interpolate-filter',
  'fedoraAnnotations.version.version-directive'
])

.value('version', '0.1');
