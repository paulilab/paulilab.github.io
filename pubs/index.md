---
layout: default
title: Publications
---

<div class="main">
  <div class="container" markdown="1">

{% for year in site.years %}
  {% assign pubs = site.publications | where: "year", year %}
  {% assign len = pubs | size %}
  {% if len > 0 %}
### {{ year }}
    {% for pub in pubs %}
* {{ pub.authors }} ({{ pub.year }}). {{ pub.title }}. {{ pub.journal }} {{ pub.pages }}. <a href="{{ site.baseurl }}{{ pub.url }}">More...</a>
    {% endfor %}
  {% endif %}
{% endfor %}

</div>
</div>
