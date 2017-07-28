'use strict';

module.exports = function defaultDeployment() {
  return {
    name: 'default',
    examples: {
      commonFiles: {
        scripts: [
          '../../za-material.lib.js',
          '../../za-material.js',
          '../../za-material.template.js',
        ],
        stylesheets: [
          '../../za-material.css',      
        ]
      },
      dependencyPath: '../../'
    },
    scripts: [
      
    ],
    stylesheets: [

    ]
  };
};
