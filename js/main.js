$(function () {
  const assets = {
    scroller: (o, t) => {
      o.on(`click`, () => {
        t[0].scrollIntoView({
          behavior: `smooth`
        })
      })
      // },
      // navToggle: () => {		
      //   const bar = {
      //     1: "bar1",
      //     2: "bar2",
      //     3: "bar3",
      //     4: "mainNav",
      //     5: "mobileNavButton"
      //   }
      //   for (i = 1; i < 6; i++) {
      //     // if (window.innerWidth <= 768) {
      //       $(`${bar[i]}`).toggleClass(`${bar[i]}Click`);
      //     // }
      //   }
    }
  }
  // $('.mobileElement').on('click', () => {
  //   assets.navToggle()
  // })
  assets.scroller($('.aboutButton'), $('#about'))
  assets.scroller($('.skillsButton'), $('#skills'))
  assets.scroller($('.portfolioButton'), $('#portfolio'))
})

