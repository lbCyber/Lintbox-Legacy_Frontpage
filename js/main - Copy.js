$(function () {
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
  $(document).scroll(() => {
    $('.mainNav').toggleClass('scrollDown', $(this).scrollTop() > $('.mainNav').height());
  });
  $(document).scroll(() => {
    $('.navText').toggleClass('scrollDownText', $(this).scrollTop() > $('.navText').height());
  });
});