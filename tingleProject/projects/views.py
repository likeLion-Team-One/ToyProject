from django.shortcuts import render, get_object_or_404, redirect
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Comment, Bookmark
from .serializers import PostSerializer, CommentSerializer, BookmarkSerializer
from rest_framework.viewsets import ModelViewSet

class PostViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.filter(created_by = self.request.user)
        status = self.request.query_params.get('status')
        if status:
            queryset = queryset.filter(status=status)
        return queryset
    
    def perform_create(self, serializer):
        mode = self.request.query_params.get("mode", "draft")
        serializer.save(
            created_by=self.request.user,
            status='draft' if mode == 'draft' else 'complete'
        
        )

    def perform_update(self, serializer):
        mode = self.request.query_params.get("mode", "complete")
        serializer.save(status='draft' if mode == 'draft' else 'complete')

class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    
    def get_queryset(self, **kwargs):
        id = self.kwargs['post_id']
        return self.queryset.filter(post=id)
    def perform_create(self, serializer):
        post_id = self.kwargs.get('post_id')  # URL에서 /projects/<pk>/comments
        post = Post.objects.get(pk=post_id)
        serializer.save(user=self.request.user, post=post)  
    
#bookmark
class BookmarkViewSet(ModelViewSet):
    serializer_class = BookmarkSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Bookmark.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['post'])
    def toggle(self, request):
        post_id = request.data.get('post')
        user = request.user
        
        # 이미 북마크가 있는지 확인
        bookmark = Bookmark.objects.filter(user=user, post_id=post_id).first()
        
        if bookmark:
            # 북마크가 있으면 삭제
            bookmark.delete()
            return Response({'message': '북마크가 삭제되었습니다.', 'bookmarked': False}, status=status.HTTP_200_OK)
        else:
            # 북마크가 없으면 생성
            Bookmark.objects.create(user=user, post_id=post_id)
            return Response({'message': '북마크가 추가되었습니다.', 'bookmarked': True}, status=status.HTTP_201_CREATED)
