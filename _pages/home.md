---
layout: default
title: home
permalink: /
---
<div class="row">

  <div class="col-sm-4" markdown="1">

## Research focus

### Short proteins

We are interested in understanding the molecular mechanisms that control embryogenesis. Our main goal is to identify and unravel the functions of new regulators, which either belong to the class of short, previously hidden proteins or are of post-transcriptional nature.
We are aiming to address the following questions: 
1)	**Fertilization**: How is fertilization regulated? We are specifically interested in identifying new molecular players that allow sperm-egg interaction and fusion.
2)	**Toddler**: How does the short secreted protein Toddler (also called Apela/ELABELA) regulate gastrulation movements?
3)	**Translational regulation**: We are interested in investigating translational regulation and regulation by translation during embryogenesis. 
To address these questions, we are mainly using zebrafish embryos since they are a powerful model of vertebrate embryogenesis. We combine various experimental and computational approaches, which range from genetics, molecular biology, cell biology and biochemistry to live cell imaging and high-throughput image analysis and genomics technologies.


Learn more -> 


### Funding

-	IMP
-	Boehringer Ingelheim
-	HFSP Career Development Award
-	FWF START grant


  </div>
  <div class="col-sm-4" markdown="1">

## Lab news

{% for post in site.posts limit: 3 %}

### {{ post.title }}

{{ post.date | date_to_string }}

{{ post.excerpt }}

[Learn more &hellip;]({{ post.url }})

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
