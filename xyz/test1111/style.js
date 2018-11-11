{

geojsonOptions:{
  pointToLayer: function (feature, latlng) {
    var imgel = "<img src='" + feature.properties['_iconUrl'] + "' style='margin:0px; width:13px; height:13px;' class='leaflet-marker-icon'></img>";
    var spanel = "<span style='position:absolute; left:13px; top:-4px;'>" + feature.properties["name"] + "</span>";
    var spanel2 = "";
    var htmlel = "";
    var z = GSI.GLOBALS.map.getZoom();
    if(z < 7) {
      spanel = "";
    }
    if(!feature.properties["name"]) {
      spanel = "";
      spanel2 = "<span style='position:absolute; left:13px; top:-4px;'>" +  feature.properties["number"] + "</span>";
    if(z < 12) {
      imgel = "";
      spanel2 = "";
    }}
    htmlel = imgel + spanel + spanel2;
    var myIcon = L.divIcon({html:htmlel, className:"gsi-div-icon", iconAnchor: [7, 7], iconSize: [13, 13]});
    return L.marker(latlng, {icon: myIcon});

  },
  onEachFeature: function (feature, layer) {
    var s = "<table>";
    var photoFlg = false;


    for(name in feature.properties) {
      if(!name.match(/^_/)){
        if(name=="name"){
          s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>" + feature.properties[name] + "</th></tr>";
        }else if(name=="number"){
          s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>" + feature.properties[name] + "</th></tr>";
        }
        }else if(name=="description"){
          s += "<tr><td colspan='2' style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";
        }
        else{
          s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + number + "</td>"
               + "<td style='font-size:14px; color:#000000;'>" + feature.properties[number] + "</td></tr>";
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