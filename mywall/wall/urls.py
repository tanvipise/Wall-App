from rest_framework import routers
from .api import WallViewSet

router = routers.DefaultRouter()
router.register('api/wall', WallViewSet, 'wall')

urlpatterns = router.urls
