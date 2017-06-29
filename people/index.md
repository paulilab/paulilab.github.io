---
layout: default
title: People
---

<div class="main">
  <div class="container" markdown="1">

### Current

{% assign peeps = site.people | where: 'member_till', 'now' | sort: 'name' %}
{% for peep in peeps %}
* {{ peep.name }}
  {{ peep.email }}
  {{ peep.position }}
  {{ peep.member_from }} .. {{ peep.member_till }}
  {{ peep.occuppied_by }}
{% endfor %}

### Former

{% assign peeps = site.people | where_exp: 'item', 'item.member_till  != "now"' | sort 'name' %}
{% for peep in peeps %}
* {{ peep.name }}
  {{ peep.position }}
  {{ peep.member_from }} .. {{ peep.member_till }}
  {{ peep.moved_to }}
{% endfor %}

</div>
</div>
