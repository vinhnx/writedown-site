// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! Real Shadow v1.2.0 https://github.com/Indamix/real-shadow | https://raw.github.com/Indamix/real-shadow/master/license.txt */
(function(l,q){function g(c,d){this!==l&&(d=c,c=this);for(var a in d)f[a]=d[a];!h.length&&f.followMouse&&document.body.addEventListener("mousemove",j);l.addEventListener("resize",r);for(a=0;a<c.length;++a){var b=c[a],e=b.getAttribute("rel"),b={dom:b,x:b.offsetLeft+(b.clientWidth>>1),y:b.offsetTop+(b.clientHeight>>1)};e?b.c={r:-1!==e.indexOf("r"),g:-1!==e.indexOf("g"),b:-1!==e.indexOf("b")}:f.c&&(b.c=f.c);b.inset=f.inset?"inset":"";h.push(b)}j();return c}function r(){for(var c=h.length,d,a;c--;)d=
    h[c],a=d.dom,d.x=a.offsetLeft+(a.clientWidth>>1),d.y=a.offsetTop+(a.clientHeight>>1);j()}function j(c){c===q&&(c={pageX:f.pageX!==q?f.pageX:l.innerWidth>>1,pageY:f.pageY!==q?f.pageY:0});for(var d=h.length,a;d--;){a=h[d];var b=c.pageX-h[d].x,e=c.pageY-h[d].y,m=Math.pow(b*b+e*e,n.pow),m=m/n.div+1;m>n.nMax&&(m=n.nMax);for(var g=Math.atan2(b,e)-s,b=f.length,e=[],k=Math.cos(g),g=Math.sin(g),j=void 0,p=1;p<b;++p)j=Math.pow(p,m),e.push((j*g>>0)+"px "+(j*k>>0)+"px "+(Math.pow(p,1.7)>>0)+"px rgba("+(a.c?(a.c.r?
    100:0)+","+(a.c.g?100:0)+","+(a.c.b?100:0)+",":"0,0,0,")+".05)"+a.inset);a.dom.style.boxShadow=e.join(",")}}var f={followMouse:!0,length:7},n={nMax:2.3,pow:0.8,div:1500},s=Math.PI,h=[],k=!1;"function"===typeof l.jQuery&&($.fn.realshadow=g,$.fn.realshadow.update=r,k=!0);"undefined"!==typeof define&&define.amd&&(define(function(){return g}),k=!0);"undefined"!==typeof module&&module.exports&&(module.exports=g,k=!0);k||(l.realshadow=g)})(this);