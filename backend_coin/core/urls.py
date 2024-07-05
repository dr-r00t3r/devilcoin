from django.urls import path
from .views import Home

# urlpatterns = []
urlpatterns = [
    path(r'', Home.as_view(), name="index"),

]
