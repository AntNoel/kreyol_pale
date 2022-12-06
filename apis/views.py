from django.shortcuts import render
from rest_framework import generics, response
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


class WordUpdateAPIView(generics.UpdateAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = {"likes": request.data.get("likes")}
        serializer = self.get_serializer(instance, data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return response.Response(serializer.data)
