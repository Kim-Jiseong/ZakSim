from rest_framework import serializers
from .models import Post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'author',
            'title',
            'content',
            'finished_at',
            'created_at',
            'success'
        )
        model = Post