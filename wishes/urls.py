from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name="home"),
    path('', views.countdown, name="countdown"),
    path("messi/", views.messi, name="messi"),
    path("speed/", views.speed, name="speed"),
    path("message/", views.message, name="message"),
    path("why-you/", views.why, name="why"),
    path("gallery/", views.gallery, name="gallery"),
    path("memories/", views.memories, name="memories"),
]