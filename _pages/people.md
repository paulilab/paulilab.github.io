---
layout: default
title: People
permalink: /people/
---

{% assign peeps = site.people | sort: 'name' %}
{% for peep in peeps %}
 {% if peep.member_till != 'now' %}
   {% continue %}
 {% endif %}
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

<ul>
{% for peep in peeps %}
 {% if peep.member_till == 'now' %}
  {% continue %}
 {% endif %}
  <li>{{ peep.name }} ({{ peep.position }}), {{ peep.member_from }}&ndash;{{ peep.member_till }}{% if peep.moved_to %}, now at {{ peep.moved_to }}{% endif %}</li>
{% endfor %}
</ul>
