(function() {
    'use strict';
    angular
        .module('animation-events', [])
        .directive('animationend', animationEnd);

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
})();
