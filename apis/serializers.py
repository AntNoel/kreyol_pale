from rest_framework import serializers
from words.models import Word


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = (
            "id",
            "name",
            "definition",
            "variations",
            "pronounciation",
            "phrases",
            "examples",
            "likes",
            "image",
        )

    def update(self, instance, validated_data):
        instance.likes += validated_data.get("likes", instance.likes)
        instance.save()
        return instance
