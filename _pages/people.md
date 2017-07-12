---
layout: default
title: People
permalink: /people/
splash: /assets/img/splash/headsback.jpg
picture: /assets/img/PauliLab2016.jpg
#description: "{{ page.content | liquify | strip_html | truncatewords: 15 }}"
---

{% assign peeps = site.people | sort: 'last_name' %}

{% for peep in peeps %}
 {% if peep.position != 'Principal Investigator' %}
   {% continue %}
 {% endif %}
 {% include peep %}
{% endfor %}

{% for peep in peeps %}
 {% if peep.member_till != 'now' %}
   {% continue %}
 {% endif %}
 {% if peep.position == 'Principal Investigator' or peep.position == 'Intern' or peep.position == 'VBC Summer Student' %}
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
  <li>{{ peep.first_name }} {{ peep.last_name }} ({{ peep.position }}), {{ peep.member_from }}&ndash;{{ peep.member_till }}</li>
{% endfor %}
</ul>
