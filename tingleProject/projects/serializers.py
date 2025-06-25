from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Post, Comment

class PostSerializer(ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'
    

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'comment', 'post', 'user', 'created_at']
        read_only_fields = ['post']