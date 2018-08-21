'use strict';

module.exports = {
  apps: [
    {
      name: 'lyve',
      script: '/applis/liste_courses/server/server.js',
      env_production: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
