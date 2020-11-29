from rest_framework import serializers
from .models import Student

# serializer creates JSON object
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('student_id', 'address', 'city', 'zip_code', 'state', 'tract_id', 'neighborhood_rating', 'kfr')