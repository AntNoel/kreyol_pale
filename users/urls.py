from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("signup", views.SignUpPageView.as_view(), name="signup"),
    # path("is_logged_in", views.LoginRedirectView.as_view(), name="login"),
]
