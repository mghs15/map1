{

geojsonOptions:{
  pointToLayer: function (feature, latlng) {
    var imgel = "<img src='" + feature.properties['_iconUrl'] + "' style='margin:0px; width:13px; height:13px;' class='leaflet-marker-icon'></img>";
    var spanel = "<span style='position:absolute; top:-13px; right:13px;'>" + feature.properties["name"] + "</span>";
    var htmlel = "";
    var z = GSI.GLOBALS.map.getZoom();
    if(z < 14) {
      spanel = "";
    }
    htmlel = imgel + spanel;
    var myIcon = L.divIcon({html:htmlel, className:"gsi-div-icon", iconAnchor: [7, 7], iconSize: [13, 13]});
    return L.marker(latlng, {icon: myIcon});

  },
  onEachFeature: function (feature, layer) {
    var s = "<table>";
    var photoFlg = false;
    s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>登川支線の駅</th></tr>"

    for(name in feature.properties) {
      if(!name.match(/^_/)){
        if(name=="name"){
          s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>" + feature.properties[name] + "</th></tr>";
        }else if(name=="description"){
          s += "<tr><td colspan='2' style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";

        }
        else{
          s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + name + "</td>"
               + "<td style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";
        }
      }
    }
    s += "</table>";
    if(s != "<table></table>"){
      layer.bindPopup(s,{maxWidth:500});
    }
  }
}

}