{
options:
{
  attribution: '基盤地図情報ベクトルタイル',minZoom:18,maxNativeZoom: 18,maxZoom: 24
},
geojsonOptions:
{
    pointToLayer: function(feature, latlng) {
        var client = feature.properties['_client'];
        var height_ori = 9999 - Math.round(feature.properties['alti'] + 1000);
        var height_grad = "#" + "0" + height_ori + "0";
        if(client && client == "gsi.3d"){
            var mark = L.circleMarker(latlng, { weight : 0, color : height_grad, opacity : 0.0, fillColor : "#000000", fillOpacity : 0.3 });
            mark.setRadius(5);
            return mark;
        }
        else{
            return L.marker(latlng, {
            icon      : L.divIcon({
            iconAnchor: [5,5],
            className : "gsi-div-icon",
            html: '<div style=\"'
            +'width: 10px;'
            +'height: 10px;'
            +'background-color: '
            +height_grad
            +';'
            +'-webkit-border-radius: 10px;'
            +'-moz-border-radius: 10px;'
            +'border-radius: 10px;'
            +'\">' + 
            '</div>'
            })
            });
        }
    },
   onEachFeature: function (feature, layer) {
    var s = ''
    for(var n in feature.properties) {
      s += "<a style='font-size: 12px;color:#000;'>" + n + "：" + feature.properties[n] + "</a><br>";
    }
    layer.bindPopup(s);
   }
}
}

