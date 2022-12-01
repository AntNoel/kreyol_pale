from django.contrib import admin
from django.urls import path, include
from . import views

# from django.views.decorators.cache import cache_page

# this route catches any url below the main one, so the path can be passed to the front end
urlpatterns = [
    path("allwords", views.AllWordsView.as_view(), name="word_list"),
    path(
        # "<path:path>",
        # (cache_page(60 * 15))(views.WordView.as_view()),
        # name="word_template",
        "<path:path>",
        views.WordView.as_view(),
        name="word_template",
    ),
]
