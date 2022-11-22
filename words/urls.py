from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [path("", views.WordView.as_view(), name="word_template")]
