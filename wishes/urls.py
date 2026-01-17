from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name="home"),
    path('', views.countdown, name="countdown"),
    path("gift/", views.gift, name="gift"),
    path("message/", views.message, name="message"),
    path("gallery/", views.gallery, name="gallery"),
    path("default/", views.default, name="default"),
    path("message1/", views.message1, name="message1"),
    path("message2/", views.message2, name="message2"),
]