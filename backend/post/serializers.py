from rest_framework import serializers
from .models import Post, Comment

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

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'author',
            'post',
            'content',
            'created_at'
        )
        model = Comment