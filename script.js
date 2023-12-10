function curcurEffect () {
  var cursor = document.querySelector('#cursor')
  var page1Content = document.querySelector('.page1-content')
  console.log(cursor)
  console.log(page1Content)
  page1Content.addEventListener('mousemove', function (dets) {
   console.log("ijfih")
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y
    })
  })
}
curcurEffect();