---
layout: default
title: Lab News
permalink: /news/archive/
splash: /assets/img/splash/embryos.jpg
#description: "{{ site.posts[0].excerpt }}"
---

{% for post in site.posts %}

<div>
 {% if post.picture %}
 <div class="post-picture float-right">
  <img src="{{ site.baseurl }}{{ post.picture }}" alt="post picture">
 </div>
 {% endif %}
 <div class="clearfix post-content">
  <h3>{{ post.title }}</h3>
  <h4>{{ post.date | date_to_string }}</h4>
  {{ post.content | markdownify }}
 </div>
</div>

{% endfor %}
