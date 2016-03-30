(function() {
    'use strict';
    angular
        .module('animation-events', [])
        .directive('animationend', animationEnd)
        .directive('animationstart', animationStart);

    function animationEnd() {
        var animationEndEvents = [
            'animationend',
            'webkitAnimationEnd',
            'oanimationend',
            'MSAnimationEnd'
        ].join(' ');

        function link($scope, $element, $attrs) {
            $element.on(animationEndEvents, function() {
                $scope.$eval($attrs.animationend);
            });
        }
        return {
            restrict: 'A',
            link: link
        };
    }

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
