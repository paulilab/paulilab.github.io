---
layout: default
title: People
permalink: /people2/
splash: /assets/img/splash/paulilab_recess_hike_2017.jpg
picture: /assets/img/splash/paulilab_recess_hike_2017.jpg
#description: "{{ page.content | liquify | strip_html | truncatewords: 15 }}"
---

{% assign peeps = site.people | sort: 'last_name' %}

<div class="peep2-container">

{% for peep in peeps %}
 {% if peep.position != 'Principal Investigator' %}
   {% continue %}
 {% endif %}
 {% include peep2 %}
{% endfor %}

{% for peep in peeps %}
 {% if peep.member_till != 'now' %}
   {% continue %}
 {% endif %}
 {% if peep.position == 'Principal Investigator' or peep.position == 'Intern' or peep.position == 'VBC Summer Student' %}
   {% continue %}
 {% endif %}
 {% include peep2 %}
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
 {% include peep2 %}
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