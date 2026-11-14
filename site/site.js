// The address is assembled here so it never sits in the HTML as plain text.
(function () {
  var a = ['guyyyy15', 'gmail.com'].join('@');
  var links = document.querySelectorAll('[data-mail]');
  for (var i = 0; i < links.length; i++) {
    var subject = links[i].getAttribute('data-mail');
    links[i].href = 'mailto:' + a + (subject ? '?subject=' + encodeURIComponent(subject) : '');
  }
})();
