---
layout: default
title: home
permalink: /
---
<div class="row">

  <div class="col-sm-4" markdown="1">

## Research focus

### Short proteins

Magna. Nunc bibendum lacinia tellus. Quisque porttitor ligula et pede. Nam erat
nibh, fringilla ac, rutrum sit amet, rhoncus in, ipsum. Mauris rhoncus, lacus
eu convallis sagittis, quam magna placerat est, vitae imperdiet mauris arcu ac
dui. In ac urna non justo posuere mattis.  Suspendisse egestas bibendum nulla.
In erat nunc, posuere sed, auctor quis, pulvinar quis, mi. Mauris at est.

### Development

Dis parturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa.
Sed nisi purus, malesuada eu, porta vulputate, suscipit auctor, nunc.
Vestibulum convallis, augue eu luctus malesuada, mi ante mattis odio, ac
venenatis neque sem vitae nisi. Donec pellentesque purus a lorem. Etiam in
massa. Nam ut metus. In rhoncus venenatis tellus. Etiam aliquam. Ut aliquam
lectus ut lectus. Nam turpis lacus, tristique sit amet, convallis sollicitudin,
commodo a, purus. Nulla vitae eros a diam blandit mollis. Proin luctus feugiat
eros. Pellentesque habitant morbi tristique senectus et netus et malesuada
fames ac turpis egestas. Duis ultricies urna. Etiam enim urna, pharetra.

  </div>
  <div class="col-sm-4" markdown="1">

## Lab news

{% for post in site.posts limit: 3 %}

### {{ post.title }}

{{ post.date | date_to_string }}

{{ post.excerpt }}

[Read more &hellip;]({{ post.url }})

{% endfor %}

  All [lab news &hellip;]({{ site.baseurl }}/news/).

  </div>
  <div class="col-sm-4" markdown="1">

## Contact

<div id="home_map"></div>
<script>
function initMap() {
  var loc = {lat: 48.189514, lng: 16.402876};
  var map = new google.maps.Map(document.getElementById('home_map'), {
    zoom: 12, center: loc,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: loc, map: map
  });
  {% include maps_style_silver %}
}
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByeuBHHFBQCKMGTe5okMzyofx_RDphujQ&callback=initMap"></script>

More [details &hellip;]({{ site.baseurl }}/contact/)

<img class="img-responsive" src="{{ site.baseurl }}/assets/img/20170225-lab-dinner.jpeg" alt="Pauli Lab members">

All [the people &hellip;]({{ site.baseurl }}/people/)

  </div>

</div>
