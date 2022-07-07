---
layout: post
title:  "Books"
---



# Books

## Architecture

* <figure><img width="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41SV6NlvMvL._SX258_BO1%2C204%2C203%2C200_.jpg&f=1&nofb=1"><figure-caption>Clean Architecture</figure-caption></figure>

## Attitude

* <img width="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51foanUeChL._SY445_QL70_.jpg&f=1&nofb=1"> Hacker & Painters 

## Operating Systems

* <img width="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcc%2FOberonScreen.PNG&f=1&nofb=1"> Oberon OS 

## Programming Language

* <img width="100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41nq8D8ESjL._SX218_BO1%2C204%2C203%2C200_QL40_ML2_.jpg&f=1&nofb=1"> The Little Schemer

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
