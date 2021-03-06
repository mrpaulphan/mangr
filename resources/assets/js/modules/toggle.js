/**
 * @author Paul Phan <phan@happycog.com>
 * @description This file allows you to quickly show/hide elements by adding
 * attributes to the trigger element and target element.
 * @example <a href="#" data-toggle-trigger="showDropdown">click me</a>
 * // Apply on the click trigger
 * @example <div data-toggle-target="showDropdown">..</div>
 * // Toggles element.
 * @version 1.0
 */
var $ = require('jquery');

module.exports = (function() {
    return {
        init: function() {
            var trigger = $('[data-toggle-trigger]');
            var toggle = $('[data-toggle]');
            var settings = {
                duration: 200,
                easing: 'swing'
            };

            trigger.click(function() {
                var triggerId = $(this).attr('data-toggle-trigger');
                var thisTarget = $('[data-toggle-target*="' + triggerId + '"]');

                switch (triggerId) {
                    case 'dropdown-menu':
                        thisTarget.slideToggle(settings.duration, settings.easing);
                        break;
                    case 'edit-save':
                        thisTarget.show();
                        break;
                    case 'showCompetition':
                        thisTarget.toggle();
                        break;
                    default:
                        thisTarget.toggle();
                }
            });
        },
        closeAll: function() {
            console.log('close all');
        }
    }
})();
