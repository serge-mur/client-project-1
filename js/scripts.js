$(document).ready(function () {

    $('#offCanvas').offcanvas({
        modifiers: 'left, overlay',
        triggerButton: '#triggerButton'
    });

    if (window.matchMedia("screen and (min-width: 1px) and (max-width:575px)").matches) {
        console.log('mobile');
    }

});