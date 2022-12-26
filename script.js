mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FsZmlzYWJpdCIsImEiOiJjbGJzeDNzc2YwM25uNDBvM2VmM3B4a3I3In0.2C9FcNN_mqRKXqPRDyr7FA";
 
// To get to current position
// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy: true,
// });
 
// function successLocation(position) {
//   console.log(position);
//   setupMap([position.coords.longitude, position.coords.latitude]);
// }
 
// function errorLocation() {}
 
const bounds = [
  [90.21528994123013, 23.679048066581277], // Southwest coordinates
  [90.60071508197896, 23.859044938047763], // Northeast coordinates
];
 
// function setupMap(center) {
const map = new mapboxgl.Map({
  container: "map", // container ID
  // style: "mapbox://styles/mapbox/streets-v12", // style URL
  style: "mapbox://styles/mapbox/light-v10", // style URL
  zoom: 2, // starting zoom
  maxBounds: bounds, // Set the map's geographical boundaries.
  // center: center,
  // minZoom: 6.5, // Min Zoom level of the map
  //   center: [-24, 42], // starting position [lng, lat]
  // pitch: 10, // To tilt the map
  // bearing: 0, // To keep rotating the map
  // projection: 'globe', // Projection style of the map
  // logoPosition: 'bottom-right' // Mapbox logo position
});
// }
 
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      // 1
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.35700996898726, 23.801862310944188],
      },
      properties: {
        title:
          "JICA Support Program 3 for Strengthening Mathematics and Science Education in Primary Education Project",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'National level of academic skills and knowledge obtained in primary mathematics and science is improved<p>   <a class="popup popup1" target="_blank" title="Opens in a new window" onclick="openNavP1()" >See more..</a></p>',
      },
    },
    {
      // 2
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.37269632665758, 23.768773179764562],
      },
      properties: {
        title: "Project for Capacity Building of Nursing Services Phase 2",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'The quality of nursing education is improved in Bangladesh<p>   <a class="popup popup2" target="_blank" title="Opens in a new window" onclick="openNavP2()" >See more..</a></p>',
      },
    },
    {
      // 3
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40888399782175, 23.728881264793493],
      },
      properties: {
        title:
          "The Project for Strengthening Health Systems through Organizing Communities",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'The Health status of population in Bangladesh is improved<p>   <a class="popup popup3" target="_blank" title="Opens in a new window" onclick="openNavP3()">See more..</a></p>',
      },
    },
    {
      // 4
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40895332665768, 23.780215725696586],
      },
      properties: {
        title: "Safe Motherhood Promotion Project",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Approaches of Reproductive Health (RH) services extracted from the Project are standardized and applied to other districts.<p>   <a class="popup popup4" onclick="openNavP4()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 5
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.39417243785537, 23.75363622259384],
      },
      properties: {
        title: "Safe Motherhood Promotion Project Phase 2",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Maternal and neonatal health status is improved in Bangladesh.<p>   <a class="popup popup5" onclick="openNavP5()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 6
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40787482665709, 23.728407931193587],
      },
      properties: {
        title: "National Integrity Strategy Support Project Phase 2",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Transparency and accountability system of the public administration and associated institutions is enhanced.<p>   <a class="popup popup6" onclick="openNavP6()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 7
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40910864263893, 23.7284766533655],
      },
      properties: {
        title: "Project for Capacity Development of City Corporations (C4C)",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Functions and organizational structure of the target City Corporations (CCs) are optimized.<p>   <a class="popup popup7" onclick="openNavP7()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 8
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40950864265, 23.7284766533655],
      },
      properties: {
        title: "Strengthening Paurashava Governance Project (SPGP)",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Measures of Pourashava capacity development are taken nation-wide based on mid-long term strategy.<p>   <a class="popup popup8" onclick="openNavP8()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 9
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.38098892695923, 23.7708680271343],
      },
      properties: {
        title:
          "Strengthening Public Investment Management System (SPIMS) Project Phase 2",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Public investment contributes to achieving mid-long term development plan.<p>   <a class="popup popup9"  onclick="openNavP9()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 10
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40920864263893, 23.7284766533655],
      },
      properties: {
        title: "Upazila Integrated Capacity Development Project (UICDP)",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Promoting development works and public service delivery, based on the regional characteristics, through strengthened capacity of Upazila Parishad.<p>   <a class="popup popup10" onclick="openNavP10()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 11
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40956388277749, 23.728917093659554],
      },
      properties: {
        title:
          "The Integrated Energy and Power Master Plan Project in Bangladesh",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'A low/zero carbon energy demand/supply system will be established based on the premise of ensuring energy security and economic viability.<p>   <a class="popup popup11" onclick="openNavP11()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
    {
      // 12
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [90.40986388277749, 23.728917093659554],
      },
      properties: {
        title:
          "The Project for Gas Network System Digitalization and Improvement of Operational Efficiency in Gas Sector in Bangladesh",
        description:
          //  --- Change (see more'r link) to the see more button, and link the sliding pages.---
          'Reliable, effective and efficient gas and power supply for economic development of the country is achieved.<p>  <a class="popup popup12" onclick="openNavP12()" target="_blank" title="Opens in a new window">See more..</a></p>',
      },
    },
  ],
};
 
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";
 
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
}
 
// --- Event listener on class ---
// var classname = document.getElementsByClassName("classname");
 
// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };
 
// classname.addEventListener('click', myFunction(), false);
 
// --- Event listener on class ---
var searchButton = document.getElementsByClassName("search-button");
 
var changeButtonColor = function () {
  var curImage = (searchButton.src = "hackanm.gif");
  if (curImage == "search-button.png") {
    document.getElementsByClassName("search-button").src =
      "search-button-black.png";
  } else {
    document.getElementsByClassName("search-button").src = "search-button.png";
  }
};
 
// media query to check
var media_query1 = "screen and (max-width:600px)";
var media_query2 = "screen and (min-width:600px)";
var media_query3 = "screen and (min-width: 992px)";
var media_query4 = "screen and (min-width: 1200px)";
 
// matched or not
var matched1 = window.matchMedia(media_query1).matches;
var matched2 = window.matchMedia(media_query2).matches;
var matched3 = window.matchMedia(media_query3).matches;
var matched4 = window.matchMedia(media_query4).matches;
 
function canOpenSliderFor1() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  // if (one_width != "0") {
  //   closeNavP1();
  // }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject01").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject01").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject01").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject01").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject01").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor2() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  // if (two_width != "0") {
  //   closeNavP2();
  // }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject02").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject02").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject02").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject02").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject02").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor3() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  // if (thr_width != "0") {
  //   closeNavP3();
  // }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject03").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject03").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject03").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject03").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject03").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor4() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  // if (fou_width != "0") {
  //   closeNavP4();
  // }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject04").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject04").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject04").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject04").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject04").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor5() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  // if (fiv_width != "0") {
  //   closeNavP5();
  // }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject05").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject05").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject05").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject05").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject05").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor6() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  // if (six_width != "0") {
  //   closeNavP6();
  // }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject06").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject06").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject06").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject06").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject06").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor7() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  // if (sev_width != "0") {
  //   closeNavP7();
  // }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject07").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject07").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject07").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject07").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject07").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor8() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  // if (eig_width != "0") {
  //   closeNavP8();
  // }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject08").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject08").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject08").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject08").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject08").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor9() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  // if (nin_width != "0") {
  //   closeNavP9();
  // }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject09").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject09").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject09").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject09").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject09").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor10() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  // if (ten_width != "0") {
  //   closeNavP10();
  // }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject10").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject10").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject10").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject10").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject10").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor11() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  // if (ele_width != "0") {
  //   closeNavP11();
  // }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("myProject11").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject11").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject11").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject11").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject11").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderFor12() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  var abo_width = document.getElementById("about-us-slider").style.width;
  // alert(two_width);
  if (abo_width != "0") {
    closeAboutUs();
  }
  if (zer_width != "0") {
    closeNav();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
 
  if (matched1) {
    document.getElementById("myProject12").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject12").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject12").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject12").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject12").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function canOpenSliderForAboutUs() {
  var zer_width = document.getElementById("mySidenav").style.width;
  var one_width = document.getElementById("myProject01").style.width;
  var two_width = document.getElementById("myProject02").style.width;
  var thr_width = document.getElementById("myProject03").style.width;
  var fou_width = document.getElementById("myProject04").style.width;
  var fiv_width = document.getElementById("myProject05").style.width;
  var six_width = document.getElementById("myProject06").style.width;
  var sev_width = document.getElementById("myProject07").style.width;
  var eig_width = document.getElementById("myProject08").style.width;
  var nin_width = document.getElementById("myProject09").style.width;
  var ten_width = document.getElementById("myProject10").style.width;
  var ele_width = document.getElementById("myProject11").style.width;
  var twe_width = document.getElementById("myProject12").style.width;
  // alert(two_width);
  if (zer_width != "0") {
    closeAboutUs();
  }
  if (one_width != "0") {
    closeNavP1();
  }
  if (two_width != "0") {
    closeNavP2();
  }
  if (thr_width != "0") {
    closeNavP3();
  }
  if (fou_width != "0") {
    closeNavP4();
  }
  if (fiv_width != "0") {
    closeNavP5();
  }
  if (six_width != "0") {
    closeNavP6();
  }
  if (sev_width != "0") {
    closeNavP7();
  }
  if (eig_width != "0") {
    closeNavP8();
  }
  if (nin_width != "0") {
    closeNavP9();
  }
  if (ten_width != "0") {
    closeNavP10();
  }
  if (ele_width != "0") {
    closeNavP11();
  }
  if (twe_width != "0") {
    closeNavP12();
  }
 
  if (matched1) {
    document.getElementById("about-us-slider").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("about-us-slider").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("about-us-slider").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("about-us-slider").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("about-us-slider").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
 
function openNav() {
  if (matched1) {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("mySidenav").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("mySidenav").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("mySidenav").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP1() {
  canOpenSliderFor1();
 
  if (matched1) {
    document.getElementById("myProject01").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject01").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject01").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject01").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject01").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP1() {
  document.getElementById("myProject01").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP2() {
  canOpenSliderFor2();
 
  if (matched1) {
    document.getElementById("myProject02").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject02").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject02").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject02").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject02").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP2() {
  document.getElementById("myProject02").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP3() {
  canOpenSliderFor3();
 
  if (matched1) {
    document.getElementById("myProject03").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject03").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject03").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject03").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject03").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP3() {
  document.getElementById("myProject03").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP4() {
  canOpenSliderFor4();
 
  if (matched1) {
    document.getElementById("myProject04").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject04").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject04").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject04").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject04").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP4() {
  document.getElementById("myProject04").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP5() {
  canOpenSliderFor5();
 
  if (matched1) {
    document.getElementById("myProject05").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject05").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject05").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject05").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject05").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP5() {
  document.getElementById("myProject05").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP6() {
  canOpenSliderFor6();
  // media query to check
  if (matched1) {
    document.getElementById("myProject06").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject06").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject06").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject06").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject06").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP6() {
  document.getElementById("myProject06").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP7() {
  canOpenSliderFor7();
  // media query to check
  var media_query1 = "screen and (max-width:600px)";
  var media_query2 = "screen and (min-width:600px)";
 
  // media query to check
  if (matched1) {
    document.getElementById("myProject07").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject07").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject07").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject07").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject07").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP7() {
  document.getElementById("myProject07").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP8() {
  canOpenSliderFor8();
 
  // media query to check
  if (matched1) {
    document.getElementById("myProject08").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject08").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject08").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject08").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject08").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP8() {
  document.getElementById("myProject08").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP9() {
  canOpenSliderFor9();
 
  // media query to check
  if (matched1) {
    document.getElementById("myProject09").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject09").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject09").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject09").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject09").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP9() {
  document.getElementById("myProject09").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP10() {
  canOpenSliderFor10();
 
  // media query to check
  if (matched1) {
    document.getElementById("myProject10").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject10").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject10").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject10").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject10").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP10() {
  document.getElementById("myProject10").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP11() {
  canOpenSliderFor11();
 
  // media query to check
  if (matched1) {
    document.getElementById("myProject11").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject11").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject11").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject11").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject11").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP11() {
  document.getElementById("myProject11").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openNavP12() {
  canOpenSliderFor12();
 
  if (matched1) {
    document.getElementById("myProject12").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("myProject12").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("myProject12").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("myProject12").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("myProject12").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeNavP12() {
  document.getElementById("myProject12").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function openAboutUs() {
  canOpenSliderForAboutUs();
 
  if (matched1) {
    document.getElementById("about-us-slider").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else if (matched4) {
    document.getElementById("about-us-slider").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  } else if (matched3) {
    document.getElementById("about-us-slider").style.width = "40vw";
    document.getElementById("map").style.marginLeft = "40vw";
  } else if (matched2) {
    document.getElementById("about-us-slider").style.width = "100vw";
    document.getElementById("map").style.marginLeft = "100vw";
  } else {
    document.getElementById("about-us-slider").style.width = "22vw";
    document.getElementById("map").style.marginLeft = "22vw";
  }
}
function closeAboutUs() {
  document.getElementById("about-us-slider").style.width = "0";
  document.getElementById("map").style.marginLeft = "0";
}
 
function responsive_function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}