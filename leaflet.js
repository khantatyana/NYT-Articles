//Daria: we are listening to the click on the search page
var submitButton = $("#submitButton");
submitButton.click( function () {
    
    // need to work dropdown state Button working before
    // stateCode = $("#stateList").val();

    //Daria: this function will render the content of the results page
    // var state = "pa";
    // var activitiesName = "Biking";
    // var themeTopic = "Abolition Movement";

    fetchResults(state);
    //, activitiesName, themeTopic)
    
});



var stateName = "pa";
var activitiesName = "Biking";
var themeTopic = "Abolition Movement";

fetchResults(stateName, activitiesName);

//this function is going to fetch all the places that match the search
function fetchResults(stateName,activitiesName, themeTopic ) {
    //, activity, theme

    $.ajax({
        url: "https://developer.nps.gov/api/v1/parks?stateCode="+ stateName +"&api_key=9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd",
        method: "GET"
    }).then(function(response){
        console.log(response);
    
        alert(activitiesName);

        var parksByState = response.data.length;
        
        //var parksWithActivities = [{}];

        for (var i = 0; i < parksByState; i++) {
            var display = true;

            // if the activity name is not empty
            if (activitiesName != "") {

                var activitiesObject = response.data[i].activities;

              for (var j = 0; j < activitiesObject.length; j++ ){

                var eachActivityObject = response.data[i].activities[j];

                if((eachActivityObject.name).includes(activitiesName)){

                    var parkName = response.data[i].fullName;
                    var activities = [];

                    activities.push(activitiesName);
                    alert(activities);


                    displayParkOptions(parkName, JSON.stringify(activities));
                     

                        
                    // var newVal = [
                    // {
                    // parkName : (response.data[i].fullName),
                    // activityName : (eachActivityObject.name)
                    // }
                    // ];

                    // parksWithActivities = parksWithActivities.concat(newVal);

                } 
                
              }

              //alert(JSON.stringify(parksWithActivities));
            }
                

            // }

            // if (themeTopic != "") {

            //     if (!(response.data[i].topics.includes(activitiesName)) {

            //     display == false;                

            //    }
                

            // }            
        

 
       }
        // }

        function displayParkOptions(parkName, activities){

            var resultsDiv = $("<div>").addClass("pure-u-3-5 results").appendTo("#parentResultsDiv");
            $("<h4>").text(parkName).appendTo(resultsDiv);
            $("<p>").text(activities);
            }



    });


    // alert(contacts.states);
    // alert(activities);
    // alert(entranceFees.title);
    // alert(data.description);
    // alert(data.images[0].url);


}









//____________________________________________________________________
///////////// Map stuff
// var state = "ny";

// getLatLon(state);

// function getLatLon(state){

//  $.ajax({
//         url: "https://developer.nps.gov/api/v1/parks?q="+ state +"&api_key=9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd",
//         method: "GET"
//     }).then(function(response){
//         console.log(response);

//         var lat = response.data[0].latitude;
//         var lon = response.data[0].longitude;

//         getMap(lat, lon);

//     });
// }


//     //feeding in lat and long to initialize map
//     //  var lat = -34.397;
//     //  var lon = 150.644;
// function getMap(lat, lon){

// var mymap = L.map('mapid').setView([lat, lon], 13);
// var marker = new L.marker([lat, lon]);
//     marker.addTo(mymap);

// // here we are creating a MapBox Streets tile layer. Involves
// // creating attribution text and max zoom level
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2hhbnRhdHlhbmEiLCJhIjoiY2tianl6cGtyMHJ2ejJzdGRkamk4amV1byJ9.dvCAei1CaORvJiWXoaEn5g', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 10,
//     id: 'mapbox/streets-v11',
//     //this is 
//     tileSize: 512,
//     zoomOffset: -1,
//     // attributionControl: false,
//     accessToken: 'pk.eyJ1Ijoia2hhbnRhdHlhbmEiLCJhIjoiY2tianl6cGtyMHJ2ejJzdGRkamk4amV1byJ9.dvCAei1CaORvJiWXoaEn5g'
// }).addTo(mymap);

// }

//________________________________________________________________

// the export of the init function
// (function(exports) {
//     "use strict";

//     var lati = -34.397;
//     var longi = 150.644;

//     function initMap() {
//       exports.map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//           lat: lati,
//           lng: longi
//         },
//         zoom: 8
//       });

//       exports.marker = new google.maps.Marker ({
//           position: {
//             lat: lati,
//             lng: longi
//           }
//       });

//       marker.setMap(map);
//     }
//     exports.initMap = initMap;
//     //window - refers to the window in which script is running is exposed to js code
//     //|| {} - if this.window is not initialized, then this piece of code will initialize it
//   })((this.window = this.window || {}));


// $(function(){
//     var map;

//     //attach the callback function to the windows object
//     window.initMap = function(){
//         //JS API is loaded and available
//         map = new google.maps.Map($("#map")), {
//             center: {lat: -34.397, lng: 150.644 },
//             zoom: 8
//         }

//     };



//     // create the script tag and set attributes
//     var script = $("#mapCall");
//     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiV7_7LrySbARCtQhOWnXADIXGRWeSIVs&callback=initMap';
//     //this will ask the browser to parse the html first
//     script.defer = true;

//     //ask the browser to render the rest of the website while maps JS API loads.
//     //when API is ready it will call the function specified using the callback parameter.
//     script.async = false;



// });






 //____________________________________________________________
    // $("#googleMap").attr("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyBiV7_7LrySbARCtQhOWnXADIXGRWeSIVs&q=Space+Needle,Seattle+WA").appendTo("#map");



    // // function initMap() {

    //     $.ajax({
    //         url: "https://developer.nps.gov/api/v1/parks?q=ny&api_key=9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd",
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);

    //         // //getting latitude and longitude to pass into maps api
    //         // var lat = response.data[0].latitude;
    //         // var lon = response.data[0].longitude;
    //         // console.log(lat);
    //         // console.log(lon);
    //         // initMap(lat, lon);

    //         //var name = response.data[0].fullname;
    //         var name = response.data[0].id;
    //         alert(name);

    //         // $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyBiV7_7LrySbARCtQhOWnXADIXGRWeSIVs&q=place_id:" + name);

    //     });
//_______________________________________________________________

    //     // The location of parkLocation
    //     var parkLocation = { lat: parseFloat(ltt), lng: parseFloat(lng) };
    //     // This creates a new google maps object
    //     var map = new google.maps.Map(
    //         //center property tells the api where to center the map
    //         //zoom property specifies the zoom level for the map
    //         document.getElementById('map'), { zoom: 4, center: parkLocation });
    //     // The marker, positioned at parkLocation
    //     var marker = new google.maps.Marker({ position: parkLocation, map: map });

    // }




// var searchState = "ny";

// //calling the get map function
// getMap(searchState);

// //creating the getmap function for detail.html
// function getMap(state){

// //making a temporary ajax call until code is merged to master
// $.ajax({
//     url: "https://developer.nps.gov/api/v1/parks?q="+ state +"&api_key=9bu5bi3vaKYgYQt7Cj4pxdYFN8pkwsL9zSIiRFEd",
//     method: "GET"
// }).then(function(response){
//     console.log(response);

//     //getting latitude and longitude to pass into maps api
//     var lat = (parseFloat(response.data[0].latitude)).toFixed(6);
//     var lon = (parseFloat(response.data[0].longitude)).toFixed(6);
//     alert(lat);
//     alert(lon);
//     initMap(lat, lon);

//////////////////////////////////////MapBox code now replaced by googleMaps api



// // public mapbox API
// var tokenAPI = "pk.eyJ1Ijoia2hhbnRhdHlhbmEiLCJhIjoiY2tianl6cGtyMHJ2ejJzdGRkamk4amV1byJ9.dvCAei1CaORvJiWXoaEn5g";

// // project1 mapbox API
// var tokenAPI2 = "pk.eyJ1Ijoia2hhbnRhdHlhbmEiLCJhIjoiY2tianozYmh6MHJ6czJyazA1cDR2bDQ4biJ9.e-uJ4qitZx762hMvRJfL1w";

// });

// function initMap(ltt, lng) {

//     // The location of parkLocation
//    var parkLocation = {lat: ltt, lng: lng};

//    // This creates a new google maps object
//    var map = new google.maps.Map(

//     //center property tells the api where to center the map
//     //zoom property specifies the zoom level for the map
//     document.getElementById('map'), {zoom: 4, center: parkLocation});
//    // The marker, positioned at parkLocation
//    var marker = new google.maps.Marker({position: parkLocation, map: map});

//    }

// }
