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
})