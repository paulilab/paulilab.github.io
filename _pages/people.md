---
layout: default
title: People
permalink: /people/
splash: /assets/img/splash/paulilab2018_v3.jpg
picture: /assets/img/splash/paulilab2018_v3.jpg
#description: "{{ page.content | liquify | strip_html | truncatewords: 15 }}"
---

{% assign peeps = '' | split:'' %}
{% for peep in site.people %}
{% if peep.published != false %}
{% assign peeps = peeps | push:peep %}
{% endif %}
{% endfor %}
{% assign peeps = peeps | sort: 'last_name' %}

<div class="peep-container">

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

</div>

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
