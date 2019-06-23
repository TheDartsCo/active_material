/**
 * Fonts.js
 * Material design uses the Roboto Family. This script is responsible
 * for pulling it in asynchronously.
 *
 * http://www.google.com/design/spec/style/typography.html#typography-typeface
 */

WebFontConfig = {
  google: { families: [ 'RobotoDraft:regular,medium,bold,italic:latin' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);

  var mi = document.createElement('link');
  mi.href = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://fonts.googleapis.com/icon?family=Material+Icons';
  mi.rel = 'stylesheet';
  var l = document.getElementsByTagName('link')[0];
  l.parentNode.insertBefore(mi, l);
})();
