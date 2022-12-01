from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from words.models import Word

# Create your views here.


class WordView(TemplateView):
    template_name = "word/word.html"


class AllWordsView(ListView):
    model = Word
    template_name = "word/word_list.html"
    context_object_name = "words"

    def get_ordering(self):
        # Not sure if this is a best practice
        return "name"
