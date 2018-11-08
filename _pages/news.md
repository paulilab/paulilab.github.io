---
layout: default
title: Lab News
permalink: /news/
splash: /assets/img/splash/embryos.jpg
#description: "{{ site.posts[0].excerpt }}"
---

{% for post in site.posts %}
<div markdown="1">

#### {{ post.title }}

{{ post.date | date_to_string }}

{{ post.excerpt | remove: '<p>' | remove: '</p>' | replace: '\n', ' ' }}

[Read more &hellip;]({{ site.baseurl }}{{ post.url }})

</div>
{% endfor %}
