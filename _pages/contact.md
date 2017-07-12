---
layout: default
title: Contact
permalink: /contact/
splash: /assets/img/splash/imp.jpg
#description: "Address: Research Institute of Molecular Pathology (IMP), {{ site.location.street }}, {{ site.location.postal_code }} {{ site.location.city }}, {{ site.location.country }}. E-mail: andrea dot pauli at imp.ac.at"
description: "Address: Research Institute of Molecular Pathology (IMP), Campus-Vienna-Biocenter 1, A-1030 Vienna, Austria. E-mail: andrea dot pauli at imp.ac.at"
---
<div class="row">
  <div class="col-sm-6">
  <div id="contact_map"></div>
  <script>
  function initMap() {
    var loc = {lat: {{ site.location.latitude }}, lng: {{ site.location.longitude }} };
    var map = new google.maps.Map(document.getElementById('contact_map'), {
      zoom: 16, center: loc,
panControl:false,
zoomControl:true,
mapTypeControl:false,
scaleControl:true,
streetViewControl:false,
overviewMapControl:false,
rotateControl:false
    });
    var marker = new google.maps.Marker({
      position: loc, map: map
    });
    {% include maps_style_silver %}
  }
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByeuBHHFBQCKMGTe5okMzyofx_RDphujQ&callback=initMap"></script>
  </div>
  <div class="col-sm-6" markdown="1">

## Address

Pauli Lab (3rd floor)  
Research Institute of Molecular Pathology (IMP)  
{{ site.location.street }}
{{ site.location.postal_code }} {{ site.location.city }}, {{ site.location.country }}

E-mail: andrea dot pauli at imp.ac.at

GPS: [{{ site.location.latitude }},{{ site.location.longitude }}](https://www.google.com/maps/dir//Research+Institute+of+Molecular+Pathology/@{{ site.location.latitude }},{{ site.location.longitude }},12z/)

## How to get here

* __by plane:__ From the airport take the regional train S7. Get off at St. Marx/Vienna BioCenter (takes 20 min, runs every 30 min)
* __by train:__ Arriving to either the Hauptbahnhof or Westbahnhof railway station take the tram no. 18. Get off at Schlachthausgasse (takes 13 resp. 25 min).
* __by car:__ Arriving via the motorway A23 take the exit St. Marx. Arriving via the A4
  take the exit Knoten Prater. Keep in mind that parking on the street
  is restricted to 2 hrs with a valid parking ticket.

### Links

* [Connection finder](https://www.wienerlinien.at/eportal3/ep/tab.do?tabId=0) for the local transport.
* Detailed official information on [parking in Vienna](https://www.wien.gv.at/english/transportation/parking/shortterm.htm).

</div>
</div>
