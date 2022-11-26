from django.urls import path
from .views import WordAPIView, WordDetailAPIView

urlpatterns = [
    path("<str:word>", WordDetailAPIView.as_view(), name="word_data"),
    path("", WordAPIView.as_view(), name="word_list"),
]
