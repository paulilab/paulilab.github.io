---
layout: default
title: People
permalink: /people/
---

{% assign peeps = site.people | where: 'member_till', 'now' | sort: 'name' %}
{% for peep in peeps %}
<div class="row peep">
  <div class="col-sm-2 peep-photo">
  {% if peep.img %}
    <img class="img-responsive" src="{{ site.baseurl }}{{ peep.img }}" alt="{{ peep.name }}">
  {% endif %}
  </div>
  <div class="col-sm-3 peep-info">
    <h4>{{ peep.name }}</h4>
    <h5>{{ peep.position }}</h5>
    <ul>
      <li>{{ peep.email }}</li>
      <li>{{ peep.country }}</li>
      <li>Since {{ peep.member_from }}</li>
    </ul>
  </div>
  <div class="col-sm-4 peep-stuff">
    <ul>
    {% for occ in peep.progress %}
      <li>
        <span>{{ occ[0] }}</span>
        <div class="progress">
          <div class="progress-bar {% if occ[1] < 10 or occ[1] > 90 %}progress-bar-info{% else %}{% if occ[1] < 55 %}progress-bar-warning{% else %}progress-bar-success{% endif %}{% endif %}" role="progressbar" aria-valuenow="{{ occ[1] }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ occ[1] }}%;">
            {{ occ[1] }}%
          </div>
        </div>
      </li>
    {% endfor %}
    </ul>
  </div>
</div>
{% endfor %}

<h3>Former members</h3>

{% assign peeps = site.people | where_exp: 'item', 'item.member_till  != "now"' | sort 'name' %}
<ul>
{% for peep in peeps %}
  <li>{{ peep.name }} ({{ peep.position }}), {{ peep.member_from }} &mdash; {{ peep.member_till }}, now at {{ peep.moved_to }}</li>
{% endfor %}
</ul>
