---
layout: default
title: Lab News
permalink: /news/
splash: /assets/img/splash/embryos.jpg
#description: "{{ site.posts[0].excerpt }}"
---

{% for post in site.posts limit: 3 %}

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


***Find older news in the [news archive]({{ site.baseurl }}/news/archive/).***

