---
layout: default
title: Publications
permalink: /pubs/
splash: /assets/img/splash/books2.jpg
description: "Pauli Lab Publications on small peptides, uORFs, fertilization, cell movement; mostly in zebrafish embryogenesis."
---
{% for year in site.years %}
  {% assign pubs = site.pubs | where: "year", year %}
  {% assign len = pubs | size %}
  {% if len > 0 %}
## {{ year }}
    {% for pub in pubs %}
* <a name="{{ pub.path | remove: '_pubs/' | remove: '.md' }}"/>{{ pub.authors }} ({{ pub.year }}). {{ pub.title }}. {{ pub.journal }} {{ pub.pages }}. {% if pub.doi or pub.pubmed %}<span class="publinks">{% if pub.doi %}<a href="http://dx.doi.org/{{ pub.doi }}">doi:{{ pub.doi }}</a>{% endif %}{% if pub.pubmed %}{% if pub.doi %} \| {% endif %}<a href="https://www.ncbi.nlm.nih.gov/pubmed/{{ pub.pubmed }}">Pubmed:{{ pub.pubmed }}</a>{% endif %}{% if pub.pdf %}{% if pub.doi or pub.pubmed %} \| {% endif %}<a href="{{ pub.pdf }}">PDF</a>{% endif %}</span>
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
