// ==UserScript==
// @name Easy to Print GitHub issues
// @version 0.1
// @namespace https://github.com/asgrant
// @include https://github.com/*/*/issues*
// ==/UserScript==

/* based off of gaute's code at https://gist.github.com/1357711 added more CSS classes to clean-up further
   and updated some of the code. */

function main() {
  var new_print_css = '#header, #footer, .subnav-bar, .js-manage-labels, .clearfix, .clear-filters, '
    + '.context-loader, .notification-settings, .keyboard-shortcuts, form, input, .comments, .back, '
    + '.js-comment-container, .sorts, .bignav, .repo-label, .tabs, .pagehead-actions, .read-status, .actions {display: none;}'
    + ' * {-webkit-print-color-adjust: exact; }';

  var github_css = $('head link[media=screen]').attr('href');
  $('head').append('<link rel="stylesheet" media="print" href="' + github_css + '" type="text/css" />');
  $('head').append('<style media="print" type="text/css">' + new_print_css + '</style>');
}

var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);
