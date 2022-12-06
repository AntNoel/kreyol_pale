from django.shortcuts import render
from django.views.generic import TemplateView, FormView
from django.views import View
from django.shortcuts import redirect
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from words.models import Word

# from django.views.generic import FormView

# Create your views here.


class GetHomeView(TemplateView):
    template_name = "home.html"


class PostHomeView(FormView):
    template_name = "home.html"


# class HomePageView(View):
#     def get(self, request, *args, **kwargs):
#         return redirect(GetHomeView.as_view())

#     def post(self, request, *args, **kwargs):
#         print("This was a form")
#         return redirect(PostHomeView.as_view())


#  def get(self,request,*args,**kwargs):
#          form=Signup_teacher_form()
#          return render(request,'Signup_teacher.htm',{'form':form})
#     def post(self,request,*args,**kwargs):
#         form=Signup_teacher_form(request.POST)
#         if form.is_valid():
#             form.save()
#         form=Signup_teacher_form()
#         return render(request,'Signup_teacher.htm',{'form':form})


class HomePageView(View):
    def get(self, request, *args, **kwargs):
        new_words = Word.objects.order_by("created_date")[:5]
        popular_words = Word.objects.order_by("-likes")[:5]
        return render(
            request,
            "home.html",
            {"new_words": new_words, "popular_words": popular_words},
        )

    def post(self, request, *args, **kwargs):
        search_word = request.POST["word"]
        print(search_word)
        # print(search_word)
        # return reverse("home")
        # return HttpResponseRedirect(reverse("word_template", args=[search_word]))
        return HttpResponseRedirect(reverse("word_template", args=[search_word]))
