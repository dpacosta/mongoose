'use strict';

if (parseInt(process.versions.node.split('.')[0], 10) >= 10) {
  require('./es-next/asyncIterator.test.es6.js');
  require('./es-next/lean.test.es6.js');
}
