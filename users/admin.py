from django.contrib import admin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

# Register your models here.


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    list_display = ["email", "username", "is_staff"]
    model = CustomUser
    # fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("is_active",)}),)
    # add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ("is_active",)}),)


admin.site.register(CustomUser, CustomUserAdmin)
