from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.


class ComingSoonView(TemplateView):
    template_name = "posts/coming_soon.html"
