from django.urls import path
from .views import ComingSoonView

urlpatterns = [
    path("<str:word>", ComingSoonView.as_view(), name="article_list"),
]
