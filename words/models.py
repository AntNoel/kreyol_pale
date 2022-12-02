from django.db import models

# Create your models here.


class Word(models.Model):
    name = models.CharField(max_length=50)
    definition = models.TextField()
    variations = models.TextField(default="", blank=True)
    pronounciation = models.FileField(upload_to="uploads/audios", blank=True)
    phrases = models.TextField(default="", blank=True)
    examples = models.TextField(default="")
    approved_status = models.BooleanField(default=True)
    created_date = models.DateTimeField(auto_now=True, blank=True)
