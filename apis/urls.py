from django.urls import path
from .views import WordAPIView, WordDetailAPIView, WordUpdateAPIView

urlpatterns = [
    path("update/<int:pk>", WordUpdateAPIView.as_view(), name="api_word_update"),
    path("<str:word>", WordDetailAPIView.as_view(), name="api_word_data"),
    path("", WordAPIView.as_view(), name="api_word_list"),
]
