const status =[{code:200, mesage:"Exitoso"},{code:400, mesage:"No se actualizaron los datos"}]
export function getAireData(callback){
    var options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var dataLocation = pos
      if (dataLocation && dataLocation.coords) {
        var stringCoord = "geo:" + dataLocation.coords.latitude + ";" + dataLocation.coords.longitude;
        var urlWithLocation = "https://api.waqi.info/feed/" + stringCoord + "/?token=15bae679176be73a9af8eabd9e9099d4b027828d";
        return fetch(urlWithLocation).then((response) => response.json()).then((responseJson) => {
          var dataWebSer = responseJson.data;
          callback(status[0],dataWebSer)
        }).catch((error) => {
          callback(400,error)
        });
      }
    }, function (error) {
         callback(status[1],error)
    });
  
}