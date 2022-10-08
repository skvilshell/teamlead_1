$(document).ready(function () {

   $(".slider").slick({
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 1000,
      adaptiveHeight: true,
      swipeToSlide: true
   })

   let timerStarted = false

   $(window).on("scroll", () => {

      let scroll = $(window).scrollTop() + $(window).height()
      let formPos = $(".form").position().top

      if (scroll >= formPos && !timerStarted) {

         timerStarted = true
         let timer = 30 * 60 * 1000

         let Timer30 = setInterval(() => {

            timer -= 1000
            let min = Math.floor(timer / 60 / 1000)
            let sec = Math.floor((timer - (min * 60 * 1000)) / 1000)

            if (timer <= 0) {
               alert("Время вышло, но ничего страшного не будет. Можешь дальше смотреть мой сайт 0_o")
               clearInterval(Timer30)
            } else {
               $(".timer").html(min + ":" + sec)
            }
         }, 1000)
      } else {

      }
   })


})