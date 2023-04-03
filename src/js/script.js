const coords = [
  {
    name: 'San Jose',
    lat: 37.335480,
    lng: -121.893028,
  },
  {
    name: 'Houston',
    lat: 29.749907,
    lng: -95.358421,
  },
  {
    name: 'Belgrade',
    lat: 44.787197,
    lng: 20.457273,
  },
  {
    name: 'Cairo',
    lat: 30.033333,
    lng: 31.233334,
  },
  {
    name: 'Dubai',
    lat: 25.276987,
    lng: 55.296249,
  },
  {
    name: 'Astana',
    lat: 51.169392,
    lng: 71.449074,
  },
  {
    name: 'Singapore',
    lat: 1.290270,
    lng: 103.851959,
  },
  {
    name: 'Jakarta',
    lat: -6.200000,
    lng: 106.816666,
  },
  {
    name: 'Ho Chi Minh City',
    lat: 10.762622,
    lng: 106.660172,
  },
  {
    name: 'Manila',
    lat: 14.599512,
    lng: 120.984222,
  },
]
document.addEventListener("DOMContentLoaded", function() {
  //FIXME Maybe unnecessary?
// получаем список всех элементов с классом team_item
//   const teamItems = document.querySelectorAll('.team_item');
//   const closeButton = document.querySelector('.close_button');
//   closeButton.addEventListener('click', () => {
//     const teamWrapper = document.querySelector('.team_wrapper');
//     const teamItemExtra = document.querySelector('.team_item_extended');
//     teamWrapper.classList.toggle('team_active');
//     teamItemExtra.classList.toggle('team_active');
//   });
// // для каждого элемента списка команд добавляем обработчик события click
//   teamItems.forEach(teamItem => {
//     teamItem.addEventListener('click', (e) => {
//       const teamWrapper = document.querySelector('.team_wrapper');
//       const teamItemExtra = document.querySelector('.team_item_extended');
//       teamWrapper.classList.toggle('team_active');
//       teamItemExtra.classList.toggle('team_active');
//
//     });
//   });

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
    // const mypoints = this.addPoints( {
    //   points: [
    //     { location: {lat: 12.5, lng: 18.7}, scale: 2 },
    //     { location: {lat: 19.3, lng: 10.2}, scale: 2 },
    //     { location: {lat: 14.9, lng: 15.1}, scale: 2 }
    //   ],
    //   color: '#CDAE64',
    //   opacity: 0.75,
    //   hotspot : true
    // } );
    // mypoints.addEventListener( "click", function(e) {
    //   debugger
    //   logEvent( 'Earth', 'click' );
    //   debugger
    // } );

    const markers = coords.map(item => {
      return this.addMarker({
        location: { lat: item.lat, lng: item.lng },
        mesh: 'Pin3',
        color: '#CDAE64',
        scale: 0.25,
        hotspot : true,
        test: item.name
      })
    })
    markers.forEach(item => {
      item.addEventListener('click', function(e){
        debugger
        console.log(e)
        debugger
      })
    })
    // var mymarker = this.addMarker( {
    //   // location: { lat : 22.5, lng : 20 },
    //   // mesh: ["Pin2", "Needle"],
    //   // color: "#00FF00",
    //   location : { lat: 25.0657000, lng: 55.1712800 },
    //   // mesh: ['Pin2', 'Needle'],
    //   mesh : "Pin3",
    //   color: '#CDAE64',
    //   scale: 0.25,
    //   hotspot : true
    // } );
    // mymarker.addEventListener( "click", function(e) {
    //   debugger
    //   console.log(e)
    //   // logEvent( 'Earth', 'click' );
    //   debugger
    // } );

    // var mymarker = this.addMarker( {
    //   location : { lat: 45, lng: 0 },
    //   mesh: ['Pin2', 'Needle'],
    //   color: 'blue',
    //   scale: 1.25,
    //   hotspot : true
    // } );
    //
    // mymarker.addEventListener( "click", function() {
    //   debugger
    //   logEvent( 'Marker', 'click' );
    // } );
  })

  // myearth.addEventListener( "click", function(e) {
  //   debugger
  //   logEvent( 'Earth', 'click' );
  //   debugger
  // } );
})

function logEvent( obj, type ) {
  debugger
  document.getElementById('eventlog').value += obj + ': ' + type + '\n';
  document.getElementById('eventlog').scrollTop = document.getElementById('eventlog').scrollHeight;
}