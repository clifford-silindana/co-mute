from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .models import Driver
from .serializers import DriverSerializer

# Create your views here.

@api_view(["GET"])
def get_drivers(request) :
    drivers = Driver.objects.all()
    serializer = DriverSerializer(drivers, many = True)
    return Response(serializer.data)
