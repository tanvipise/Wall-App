from django.db import models

# Create your models here.


class Wall(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    post = models.CharField(max_length=1000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
