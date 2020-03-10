from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register('', LeadViewSet, 'leads')

urlpatterns = router.urls


