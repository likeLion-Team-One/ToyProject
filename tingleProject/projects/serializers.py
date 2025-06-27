from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Post, Comment, Bookmark

class PostSerializer(ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['status', 'created_by']
    

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'comment', 'post', 'user', 'created_at']
        read_only_fields = ['post']


class BookmarkSerializer(ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'user', 'post']
        read_only_fields = ['id', 'user']