"""kreyol_pale URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # new
from django.conf.urls.static import static  # new
from django.contrib.auth import views as auth_views

urlpatterns = [
    # Django admin
    path("admin/", admin.site.urls),
    # User management
    path(
        "users/login/",
        auth_views.LoginView.as_view(
            template_name="registration/login.html", redirect_authenticated_user=True
        ),
        name="login",
    ),
    path("users/", include("django.contrib.auth.urls")),
    # Local apps
    path("users/", include("users.urls")),
    path("", include("pages.urls")),
    path("word/", include("words.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("apis.urls")),
    path("articles", include("posts.urls")),
]

if settings.DEBUG:  # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
