'use strict';

describe('fedoraAnnotations.version module', function() {
  beforeEach(module('fedoraAnnotations.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
