from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Student, School, Access, Neighborhood

# serializer creates JSON object
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('student_id', 'address', 'city', 'zip_code', 'state', 'tract_id', 'neighborhood_rating', 'kfr')

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class NeighborhoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Neighborhood
        fields = '__all__'


class AccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Access
        fields = ('name', 'number', 'email', 'jamatkhana', 'comments')