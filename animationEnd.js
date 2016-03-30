(function() {
    'use strict';
    angular
        .module('animationend', [])
        .directive('animationend', animationEnd);

    function animationend() {
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
