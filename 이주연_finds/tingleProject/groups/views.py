from django.shortcuts import render, get_object_or_404
from .serializers import TeamSerializer, TeamListSerializer, TeamMemberSerializer, CommentSerializer
from .models import Team, TeamMember, Comment
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return TeamListSerializer
        return TeamSerializer

class TeamListViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamListSerializer

class TeamMemberViewSet(ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class CommentViewSet(ModelViewSet):
    serializer_class = CommentSerializer 
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        team_id = self.kwargs.get("team_pk")  # 여기 주의!
        return Comment.objects.filter(team_id=team_id)

    def perform_create(self, serializer):
        team = get_object_or_404(Team, id=self.kwargs["team_pk"])
        serializer.save(user=self.request.user, team=team)