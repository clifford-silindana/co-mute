from django.db import models

# Create your models here.

class Driver(models.Model):
    driver_name = models.CharField(max_length = 100)
    driver_surname = models.CharField(max_length = 100)
    vehicle_model = models.CharField(max_length = 100, null = True)
    vehicle_color = models.CharField(max_length = 100, null = True)
    vehicle_registration = models.CharField(max_length = 200)
    date_registered = models.DateField(auto_now_add = True)

