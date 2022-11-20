from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.contrib.auth import get_user_model
from .forms import CustomUserCreationForm
from django.urls import reverse_lazy

# Create your views here.
User = get_user_model()


class SignUpPageView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

    def form_valid(self, form):
        """If the form is valid, save the associated model."""

        # We want in the future for users to have to verify their email address first
        # form.instance.is_active = False
        self.object = form.save()
        return super().form_valid(form)


# not sure how to do this?
# class LoginRedirectView(RedirectView):
#     pattern_name = "login"
