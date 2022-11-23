from django.urls import path
from .views import WordAPIView, WordDetailAPIView

urlpatterns = [
    path("", WordAPIView.as_view(), name="book_list"),
    path("<int:pk>", WordDetailAPIView.as_view(), name="book_list"),
]
