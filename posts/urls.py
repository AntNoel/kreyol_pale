from django.urls import path
from .views import ComingSoonView

urlpatterns = [
    path("", ComingSoonView.as_view(), name="article_list"),
]
