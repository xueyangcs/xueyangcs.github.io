(function () {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });

    document.getElementById('go').addEventListener('click', start);

    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('粥盐'))
            .then(() => engine.shake())
            .then(() => engine.toText('我'))
            .then(() => engine.shake())
            .then(() => engine.toText('薛扬'))
            .then(() => engine.shake())
            .then(() => engine.toText('喜欢你'))
            .then(() => engine.shake())
            .then(() => engine.toText('爱你'))
            .then(() => engine.shake())
            .then(() => engine.toText('三千遍'))
            .then(() => engine.shake())
            .then(() => engine.toText('把手交给我'))
            .then(() => engine.shake())
            .then(() => engine.toText('我陪你'))
            .then(() => engine.shake())
            .then(() => engine.toText('走在小河边'))
            .then(() => engine.shake())
            .then(() => engine.toText('走在田埂上'))
            .then(() => engine.shake())
            .then(() => engine.toText('就这样'))
            .then(() => engine.shake())
            .then(() => engine.toText('走下去'))
            .then(() => engine.shake())
            .then(() => document.getElementById('go').addEventListener('click', start));
    }
    start();
})();
