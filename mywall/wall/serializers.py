from rest_framework import serializers
from wall.models import Wall


class WallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wall
        fields = '__all__'
