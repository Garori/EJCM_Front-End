document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

function callParallax() {
  $('.parallax').parallax();
}

window.load = callParallax();
