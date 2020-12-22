from rest_framework import serializers
from .models import Student, School, Access

# serializer creates JSON object
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('student_id', 'address', 'city', 'zip_code', 'state', 'tract_id', 'neighborhood_rating', 'kfr')

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('school_id', 'school_name', 'school_address', 'school_city', 'school_state', 'school_zip', 'school_rank', 'school_lat', 'school_long', 'school_tract', 'akeb_rating', 'niche_rating', 'greatschools_rating')

class AccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Access
        fields = ('name', 'number', 'email', 'jamatkhana', 'comments')