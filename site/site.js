// The address is assembled here so it never sits in the HTML as plain text.
(function () {
  var a = ['guyyyy15', 'gmail.com'].join('@');
  var links = document.querySelectorAll('[data-mail]');
  for (var i = 0; i < links.length; i++) {
    var subject = links[i].getAttribute('data-mail');
    links[i].href = 'mailto:' + a + (subject ? '?subject=' + encodeURIComponent(subject) : '');
  }
})();

// Clips: load only when they come into view, play while visible, and always offer a pause button.
// With reduced motion they wait for a tap.
(function () {
  var clips = document.querySelectorAll('video.clip');
  if (!clips.length) return;
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function load(v) {
    if (!v.src) { v.src = v.getAttribute('data-src'); }
  }
  function setLabel(v) {
    var b = v._btn;
    var playing = !v.paused;
    b.textContent = playing ? 'Pause' : 'Play';
    b.setAttribute('aria-label', (playing ? 'Pause' : 'Play') + ' the video: ' + (v.getAttribute('data-name') || 'clip'));
  }
  function play(v) { load(v); var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  for (var i = 0; i < clips.length; i++) {
    (function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'clip-btn';
      v._btn = b;
      v.parentNode.insertBefore(b, v.nextSibling);
      v.addEventListener('play', function () { setLabel(v); });
      v.addEventListener('pause', function () { setLabel(v); });
      b.addEventListener('click', function () {
        v._userPaused = !v.paused;
        if (v.paused) play(v); else v.pause();
      });
      setLabel(v);
    })(clips[i]);
  }

  if (calm || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v._userPaused) play(v); }
      else if (!v.paused) v.pause();
    });
  }, { threshold: 0.35 });
  for (var j = 0; j < clips.length; j++) io.observe(clips[j]);
})();
