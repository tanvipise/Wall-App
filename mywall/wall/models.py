from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Wall(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    post = models.CharField(max_length=1000, blank=True)
    owner = models.ForeignKey(
        User, related_name="user", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
