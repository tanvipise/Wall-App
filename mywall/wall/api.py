from wall.models import Wall
from rest_framework import viewsets, permissions
from .serializers import WallSerializer


class WallViewSet(viewsets.ModelViewSet):
    queryset = Wall.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WallSerializer
