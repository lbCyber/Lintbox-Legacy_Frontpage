$(function() {
  const assets = {
    scroller: (o, t) => {
      o.on(`click`, () => {
        t[0].scrollIntoView({
          behavior: `smooth`
        })
      })
    }
  }
  assets.scroller($('.aboutButton'), $('#about'))
  assets.scroller($('.skillsButton'), $('#skills'))
  assets.scroller($('.portfolioButton'), $('#portfolio'))
  assets.scroller($('.upArrow'), $('#home'))
    // $(document).scroll(() => {
    //   $('.mainNav').toggleClass('scrollDown', $(this).scrollTop() > $('.mainNav').height());
    // });
  $(document).scroll(() => {
    $('.navText').toggleClass('scrollDownText', $(this).scrollTop() > $('.navText').height());
    $('.mainNav').toggleClass('scrollDownNav', $(this).scrollTop() > $('.mainNav').height());
  });

  const navToggle = () => {
    if (window.innerWidth < 769) {
      const bar = [
        "bar1",
        "bar2",
        "bar3",
        "mainNav",
        "mobileNavButton"
      ]
      for (i = 0; i < 5; i++) {
        $(`.${bar[i]}`).toggleClass(`${bar[i]}Click`)
      }
    }
  }

  $('.mobileNavButton').on('click', () => {
    console.log('blep')
    navToggle()
  })
  $('.mainNavItem').on('click', () => {
    console.log('blep')
    navToggle()
  })
});