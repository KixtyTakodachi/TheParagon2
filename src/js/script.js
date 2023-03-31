
document.addEventListener("DOMContentLoaded", function() {

  //FIXME promo slider
  const slider_items = document.querySelectorAll('.promo_slider_item')

  let counter = 1
  // setInterval(() => {
  //   slider_items.forEach(item => item.classList.remove('active'))
  //   slider_items[counter].classList.add('active')
  //   counter++
  //   if(counter >= slider_items.length){
  //     counter = 0
  //   }
  // }, 5000)

  //FIXME Menu burger
  const menu_button = document.getElementsByClassName('menu_burger')[0]
  const side_menu = document.getElementsByClassName('side_menu')[0]
  menu_button.addEventListener('click', () => {
    side_menu.classList.toggle('menu_active')
  })
  const side_menu_buttons = document.getElementsByClassName('side_menu_item')
  Array.from(side_menu_buttons).forEach(item => {
    item.addEventListener('click', e => {
      side_menu.classList.toggle('menu_active')
    })
  })

  //FIXME Earth globe stuff
  let myearth = new Earth("myearth", {
    location : { lat: 20, lng : 20 },

    light: 'none',

    // mapImage: '../img/hologram-map.svg',
    mapHitTest : true,
    transparent: true,

    mapLandColor : '#015aaa',
    mapSeaColor : 'rgba(0,33,105,0.8)',
    mapBorderColor : 'rgb(0,167,255)',
    autoRotate : true,
    autoRotateSpeed: 1.2,
    autoRotateDelay: 100,
    autoRotateStart: 2000,
  })

  myearth.addEventListener("ready", function(){
    const mypoints = myearth.addPoints( {
      points: [
        { location: {lat: 12.5, lng: 18.7}, scale: 2 },
        { location: {lat: 19.3, lng: 10.2}, scale: 2 },
        { location: {lat: 14.9, lng: 15.1}, scale: 2 }
      ],
      color: '#CDAE64',
      opacity: 0.75
    } );

  })
})