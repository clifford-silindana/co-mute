from django.urls import path
from . import views

urlpatterns = [
    path("drivers/", views.get_drivers),
]