from django.shortcuts import render
from rest_framework import generics
from words.models import Word
from .serializers import WordSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q

# Create your views here.


class WordAPIView(generics.ListAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class WordDetailAPIView(generics.RetrieveAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    def get_object(self):
        search_name = self.kwargs["word"]
        word = get_object_or_404(
            Word, Q(name__iexact=search_name) | Q(variations__contains=search_name)
        )
        return word
