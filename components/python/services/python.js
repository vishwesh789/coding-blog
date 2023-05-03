'use strict';

/**
 * python service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::python.python');
