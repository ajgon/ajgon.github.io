/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require('prismjs/plugins/command-line/prism-command-line.css')
require('prismjs/themes/prism-tomorrow.css')

exports.onRouteUpdate = ({ location, prevLocation }) => {
  setTimeout(function() {
    var node = document.getElementById('goatcounter');
    if(node) { node.parentNode.removeChild(node); }
    window.counter = 'https://rzegockipl-stats.ajgon.ovh/count';
    var script = document.createElement('script');
    script.async = 1;
    script.src = '//static-stats.ajgon.ovh/count.js';
    script.id = 'goatcounter';
    var ins = document.getElementsByTagName('script')[0];
    ins.parentNode.insertBefore(script, ins);
  }, 1000);
}
