from rest_framework_nested.routers import SimpleRouter, NestedSimpleRouter
from django.urls import path, include
from .views import TeamViewSet, CommentViewSet

team_router = SimpleRouter(trailing_slash=False)
team_router.register('teams', TeamViewSet, basename='teams')

comment_router = NestedSimpleRouter(team_router, 'teams', lookup='team')
comment_router.register('comments', CommentViewSet, basename='team-comments')

urlpatterns = [
    path('', include(team_router.urls)),
    path('', include(comment_router.urls)),
]
