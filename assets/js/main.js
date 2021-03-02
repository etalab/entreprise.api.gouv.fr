window.addEventListener('load', function() {
  init()

  function init() {
    checkExternalLinks()
    initScrollToTop()
  }

  function checkExternalLinks() {
    const links = document.querySelectorAll('a')

    for(let i = 0; i < links.length; i++) {
      if (links[i].hasAttribute('target') && links[i].getAttribute('target') === '_blank') {
        links[i].classList.add('external-link')
      }
    }
  }

  function initScrollToTop() {
    var scrollToTopButton = document.getElementById('scroll-to-top');

    window.onscroll = function() {
      var offset = 20;

      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        scrollToTopButton.classList.remove('scroll-hidden');
      }
      else {
        scrollToTopButton.classList.add('scroll-hidden');
      }
    }
  }
})
