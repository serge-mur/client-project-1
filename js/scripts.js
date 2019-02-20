$(document).ready(function () {

    $('#offCanvas').offcanvas({
        modifiers: 'left, overlay',
        triggerButton: '#triggerButton'
    });

    $('#offCanvasRight').offcanvas({
        modifiers: 'right, overlay',
        triggerButton: '#triggerButtonRight'
    });


    if (window.matchMedia("screen and (min-width: 1px) and (max-width:575px)").matches) {
        console.log('mobile');
    }

});