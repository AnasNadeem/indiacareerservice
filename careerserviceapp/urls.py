from django.urls import path
from careerserviceapp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name="Home"),
    path('about/', views.about, name="About"),
    path('contact/', views.contactUs, name="Contact"),
    path('joinUs/', views.joinUs, name="JoinUs"),
    path('register/', views.registration, name="Register"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

