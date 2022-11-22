from django.shortcuts import render
from django.views.generic import TemplateView, FormView

# Create your views here.


class WordView(TemplateView):
    template_name = "word/word.html"
