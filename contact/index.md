---
layout: default
title: Contact
---
<div class="row">
  <div class="col-sm-7">
  <div id="map"></div>
  <script>
  function initMap() {
    var loc = {lat: 48.189514, lng: 16.402876};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16, center: loc
    });
    var marker = new google.maps.Marker({
      position: loc, map: map
    });
  }
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByeuBHHFBQCKMGTe5okMzyofx_RDphujQ&callback=initMap"></script>
  </div>
  <div class="col-sm-5" markdown="1">

### Address

Pauli Lab  
3rd floor  
Research Institute of Molecular Pathology (IMP)  
Campus-Vienna-Biocenter 1  
1030 Vienna, Austria  

[How to get here (by plane, train, or car).](https://www.imp.ac.at/contact/directions/)

  </div>
</div>
