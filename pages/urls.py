from django.contrib import admin
from django.urls import path
from .views import aboutus, contact_form, HomePageView

app_name = 'pages'
urlpatterns = [
    path('about-us/', aboutus, name='about-us'),
    path('contact-us/', contact_form, name='contact-us'),
    path('', HomePageView.as_view(), name='homepage'),

]