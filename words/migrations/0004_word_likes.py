# Generated by Django 4.0.8 on 2022-12-02 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0003_word_created_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='likes',
            field=models.PositiveIntegerField(blank=True, default=0),
        ),
    ]
