from django.contrib import admin
from django.urls import path, include
from . import views
from django.views.generic.base import TemplateView

urlpatterns = [
    path("signup", views.SignUpPageView.as_view(), name="signup"),
    path(
        "webpack",
        TemplateView.as_view(template_name="account/account.html"),
        name="account",
    ),
]