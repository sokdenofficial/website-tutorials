{% load static %}

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{% block title %}mysite{% endblock %}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" type="" href="{% static "css/index.css" %}">
  </head>
  <body>
   
    <div class="main">
      {% block content %}
        <!-- Our source code will display here  -->
      {% endblock %}
    </div>
  
  </body>
</html>
