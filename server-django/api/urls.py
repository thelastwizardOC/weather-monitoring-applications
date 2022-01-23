from django.contrib import admin
from django.urls import path
from .views import WeatherNowView, WeatherStatView

urlpatterns = [
    path('weather/', WeatherNowView.as_view()),
    path('weather/stat', WeatherStatView.as_view()),
]
