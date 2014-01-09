/**
 * 设置模块
 */
define(function(require, exports, module) {
    var angular = require('angularjs');

    var setting = angular.module('setting', []);

    setting.seajsController(require('./controller/disqus'));
    setting.seajsController(require('./controller/website'));

    setting.factory(require('./factory/website'));
    setting.factory(require('./factory/disqus'));

    module.exports = setting;
});