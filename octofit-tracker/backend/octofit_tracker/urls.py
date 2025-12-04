"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from octofit_tracker import views
from rest_framework.response import Response
from rest_framework.decorators import api_view

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'activities', views.ActivityViewSet)
router.register(r'leaderboard', views.LeaderboardViewSet)
router.register(r'workouts', views.WorkoutViewSet)

@api_view(['GET'])
def api_root(request, format=None):
    # Get the codespace name from environment or use localhost
    codespace_name = os.getenv('CODESPACE_NAME', 'localhost')
    base_url = f'https://{codespace_name}-8000.app.github.dev/api' if codespace_name != 'localhost' else 'http://localhost:8000/api'
    
    return Response({
        'users': f'{base_url}/users/',
        'teams': f'{base_url}/teams/',
        'activities': f'{base_url}/activities/',
        'leaderboard': f'{base_url}/leaderboard/',
        'workouts': f'{base_url}/workouts/',
    })

@api_view(['GET'])
def root(request, format=None):
    # Get the codespace name from environment or use localhost
    codespace_name = os.getenv('CODESPACE_NAME', 'localhost')
    api_url = f'https://{codespace_name}-8000.app.github.dev/api' if codespace_name != 'localhost' else 'http://localhost:8000/api'
    
    return Response({
        'message': 'Welcome to OctoFit Tracker API',
        'api': api_url,
    })

urlpatterns = [
    path('', root, name='root'),
    path('admin/', admin.site.urls),
    path('api/', api_root, name='api_root'),
    path('api/', include(router.urls)),
]
