from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    classs = models.CharField(max_length=100)
    group = models.CharField(max_length=100)
    roll = models.IntegerField()
