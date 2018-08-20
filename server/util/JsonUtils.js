'use strict';

const _ = require('lodash');

module.exports = {
  /**
   * From a given object, apply the function toJSON if this function exists on this object,
   * otherwise return the object itself.
   * - NOTE: If object is an array, the toJSON function will be call on each array's element
   *
   * @param {Object} object
   * @returns {string}
   */
  toJsonIfExists: function(object) {
    function toJson(obj) {
      return obj && obj.toJSON && _.isFunction(obj.toJSON) ? obj.toJSON() : obj;
    }
    if (_.isArray(object)) {
      return _.map(object, (obj) => toJson(obj));
    }
    return toJson(object);
  },
};
