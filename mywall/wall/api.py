from wall.models import Wall
from rest_framework import viewsets, permissions
from .serializers import WallSerializer
# from django.core.exceptions import PermissionDenied


class WallViewSet(viewsets.ModelViewSet):
    # queryset = Wall.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = WallSerializer

    def get_queryset(self):
        return self.request.user.user.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
