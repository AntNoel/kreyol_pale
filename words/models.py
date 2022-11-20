from django.db import models

# Create your models here.


class Word(models.Model):
    name = models.CharField(max_length=50)
    definition = models.TextField()
    variations = models.TextField(default="")
    pronounciation = models.FileField(upload_to="uploads/audios")
    phrases = models.TextField(default="")
    examples = models.TextField(default="")
    approved_status = models.BooleanField(default=True)
