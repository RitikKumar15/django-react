from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list', views.List.as_view()),
    path('create', views.Create.as_view()),
    path('destroy/<int:pk>', views.Destroy.as_view()),
]
