'use strict'
var gui = require('nw.gui');
var win = gui.Window.get();


// show width and height
win.window.addEventListener('resize', function () {
    document.getElementById('id-width' ).innerHTML = win.width;
    document.getElementById('id-height').innerHTML = win.height;
});


// save position and size on close
win.on('close', function() {
    localStorage.state = JSON.stringify({
        'x'     : win.x,
        'y'     : win.y,

        // !!! size
        'width' : win.width,
        'height': win.height
    });

    this.close(true);
});


// restore on startup
(function() {
    // read size and positions
    var state = JSON.parse(localStorage.state || 'null');

    if (state !==  null) {
        // !!! resize to saved size
        win.resizeTo(state.width, state.height);

        win.moveTo(state.x, state.y);
    }

    // !!! show
    win.show();
})();
