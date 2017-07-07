---
layout: simple
title: Lab News
permalink: /news/
splash: /assets/img/splash/embryos.jpg
---

{% for post in site.posts %}
<div markdown="1">

#### {{ post.title }}

{{ post.date | date_to_string }}

{{ post.excerpt | remove: '<p>' | remove: '</p>' | replace: '\n', ' ' }}

[Read more &hellip;]({{ post.url }})

</div>
{% endfor %}
