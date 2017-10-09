---
layout: subpage
title:  "News Archive"
date:   2017-10-08 12:00:00 +0200
---

[Alex’ Projects](index.html) ► News Archive

# News Archive

<p>
  {% for post in site.posts %}
    <p>
      <p>{{ post.date | date: "%Y-%m-%d, %H:%M" }} - <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></p>

    </p>
  {% endfor %}
</p>
