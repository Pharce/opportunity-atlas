from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import StudentSerializer, SchoolSerializer
from .models import Student, School
from django.views import View
from .models import School
import pandas as pd
from django.http import HttpResponse,JsonResponse
import io

# Create your views here.
class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
    

def filter(request):
    qs = School.objects.all()
    school_prefix = request.GET.get('school_prefix')
    if is_valid_queryparam(school_prefix):
        qs = qs.filter(school_name__startswith=school_prefix)
    
    return qs

class SchoolView(viewsets.ModelViewSet):
    serializer_class = SchoolSerializer
    # queryset = School.objects.all()

    def get_queryset(self):
        queryset = filter(self.request)
        return queryset


class SchoolUploadView(View):

    def get(self, request):
        template_name = 'base.html'
        return render(request, template_name)
    
    def post(self, request):
        user = request.user

        paramfile = request.FILES['schoolsfile'].file
        df = pd.read_csv(paramfile)
        df = df[df.School != None]

        row_iter = df.iterrows()

        objs = [
            School(
                school_id = row['Unnamed: 0'],
                school_name = row['School'],
                school_address = row['Address_Address'],
                school_city = row['Address_City'],
                school_state = row['Address_State'],
                school_zip = row['Address_ZipCode'],
                school_lat = row['lat'],
                school_long = row['long'],
                school_tract = row['tract_id'],
                akeb_rating = row['akeb_rating'],
                niche_rating = row['niche_rating'],
                stanford_rating = row['stanford_rating'],
                greatschools_rating = row['greatschools_rating']
            )
            for index, row in row_iter 
        ]
        try:
            School.objects.bulk_create(objs)
            returnmsg = {"status_code": 200}
            print('imported successfully')
        except Exception as e:
            print('Error While Importing Data: ',e)
            returnmsg = {"status_code": 500}
       
        return JsonResponse(returnmsg)

def is_valid_queryparam(param):
    return param != '' and param is not None




class SchoolFilterView(generics.ListAPIView):
    serializer_class = SchoolSerializer
    
    def get_queryset(self):
        qs = filter(self.request)