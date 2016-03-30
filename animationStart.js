(function() {
    'use strict';
    angular
        .module('animation-events', [])
        .directive('animationstart', animationStart);

    function animationStart() {
        var animationStartEvents = [
            'animationstart',
            'webkitAnimationStart',
            'oanimationstart',
            'MSAnimationStart'
        ].join(' ');

        function link($scope, $element, $attrs) {
            $element.on(animationStartEvents, function() {
                $scope.$eval($attrs.animationstart);
            });
        }
        return {
            restrict: 'A',
            link: link
        };
    }
})();
