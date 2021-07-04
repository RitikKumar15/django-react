from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class List(ListAPIView):
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer

class Create(CreateAPIView):
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer

class Destroy(DestroyAPIView):
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer