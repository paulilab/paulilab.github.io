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
 {% if peep.position == 'Intern' or peep.position == 'VBC Summer Student' %}
   {% continue %}
 {% endif %}
 {% include peep %}
{% endfor %}

<h3>Interns</h3>

{% for peep in peeps %}
 {% if peep.member_till != 'now' %}
   {% continue %}
 {% endif %}
 {% if peep.position != 'Intern' and peep.position != 'VBC Summer Student' %}
   {% continue %}
 {% endif %}
 {% include peep %}
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
