# users/urls.py
# ==============

from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from users.views import(
    UserRegistrationView,
    UserProfileView,
    UserStatsListView,
    UserStatsDetailView,
    LogoutView,
)

app_name = 'users'

urlpatterns = [
    # Authentication
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    
    # Profile
    path('profile/', UserProfileView.as_view(), name='profile'),
    
    # Weight Stats
    path('stats/', UserStatsListView.as_view(), name='stats-list'),
    path('stats/<int:pk>/', UserStatsDetailView.as_view(), name='stats-detail'),
]


# config/urls.py
# ==============

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')),
    # Future endpoints:
    # path('api/workouts/', include('workouts.urls')),
    # path('api/goals/', include('goals.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)