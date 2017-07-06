---
layout: default
title: home
permalink: /
---
<div class="row">
<div class="col-sm-4" markdown="1">

## Research focus

We are interested in the control of embryogenesis. Our focus is on
investigating new regulators, which range from short proteins to
post-transcriptional control mechanisms.

1. **Fertilization**: How is fertilization regulated? We are specifically
   interested in identifying new molecular players that allow sperm-egg
   interaction and fusion.
2. **Toddler**: How does the short secreted protein Toddler (also called
   Apela/ELABELA) regulate gastrulation movements?
3. **Translational regulation**: We are interested in investigating
   translational regulation and regulation by translation during embryogenesis.

### Our approach

To address these questions, we are mainly using zebrafish embryos since they
are a powerful model of vertebrate embryogenesis. We combine various
experimental and computational approaches, ranging from genetics, molecular
biology, cell biology and biochemistry to live cell imaging and genomics
technologies.

[Learn more &hellip;]({{ site.baseurl }}/research/)

[Publications &hellip;]({{ site.baseurl }}/pubs/)

### Funding

* IMP
* FWF START grant 2017
* HFSP Career Development Award
* Boehringer Ingelheim Fonds
* Öaw


</div>
<div class="col-sm-4" markdown="1">

## Lab news

{% for post in site.posts limit: 3 %}

### {{ post.title }}

{{ post.date | date_to_string }}

{{ post.excerpt }}

[Learn more &hellip;]({{ post.url }})

{% endfor %}

[All lab news &hellip;]({{ site.baseurl }}/news/).

</div>
<div class="col-sm-4" markdown="1">

## About us

<img class="img-responsive" src="{{ site.baseurl }}/assets/img/PauliLab.jpg" alt="Pauli Lab members">

The Pauli lab has launched in September 2015. Currently, we are an international
group with 3 PhD students, 1 Master student, 1 computer scientist and 1
lab-manager (and a PI...).

[Learn more &hellip;]({{ site.baseurl }}/people/)

## Contact us

The lab is based at the
[Research Institute of Molecular Pathology (IMP)](http://www.imp.ac.at/), a
basic research institute that is part of the
[Vienna Biocenter (VBC)](http://www.viennabiocenter.org).

[Learn more &hellip;]({{ site.baseurl }}/contact/)

### Links

* [http://www.imp.ac.at/research/](http://www.imp.ac.at/research/)
* [Official Pauli Lab website](https://www.imp.ac.at/research/research-groups/andrea-pauli/research/)

</div>
</div>
