from .models import MyProfile
from .serializers import MyProfileSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class MyProfileViewSet(ModelViewSet):
    queryset = MyProfile.objects.all()
    serializer_class = MyProfileSerializer
    permission_classes = [IsAuthenticated] # 로그인한 사용자만 수정

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return MyProfile.objects.filter(user=self.request.user)
    