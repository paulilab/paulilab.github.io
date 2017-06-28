---
layout: default
title: Publications
---

<div class="main">
  <div class="container" markdown="1">

{% for year in site.years %}
  {% assign pubs = site.pubs | where: "year", year %}
  {% assign len = pubs | size %}
  {% if len > 0 %}
### {{ year }}
    {% for pub in pubs %}
* {{ pub.authors }} ({{ pub.year }}). {{ pub.title }}. {{ pub.journal }} {{ pub.pages }}. {% if pub.doi %}<a href="http://dx.doi.org/{{ pub.doi }}">DOI {{ pub.doi }}</a>{% endif %}{% if pub.pubmed %}<a href="https://www.ncbi.nlm.nih.gov/pubmed/{{ pub.pubmed }}">Pubmed {{ pub.pubmed }}</a>{% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

</div>
</div>
