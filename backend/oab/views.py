<<<<<<< HEAD
from backend.settings import EMAIL_HOST_USER
=======
>>>>>>> master
from django.shortcuts import render
from rest_framework import viewsets, generics, views
from rest_framework.decorators import action
from .serializers import StudentSerializer, SchoolSerializer, AccessSerializer
from .models import Student, School, Access
from django.views import View
from .models import School
import pandas as pd
<<<<<<< HEAD
from django.http import HttpResponse,JsonResponse
from django.core.mail import send_mail
from .forms import AccessForm
import io

# Create your views here.

=======
from django.http import HttpResponse,JsonResponse, FileResponse
from msedge.selenium_tools import Edge, EdgeOptions
from selenium.webdriver.common.keys import Keys
from django.core.mail import send_mail
from .forms import AccessForm
import logging
import io


def scrape(request):

    if request.method == 'GET':
        try:
            address = request.GET["address"]
            # neighborhood_scrape(address=address)
            # time.sleep(20)
        except Exception as e:
            address = "none"
    if request.method == 'POST':
        try:
            address = request.POST["address"]
        except Exception as e:
            address = "none"
    return HttpResponse(f"Address {address}")
    #return FileResponse(open('test.png', 'rb'))
>>>>>>> master


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



class AccessView(viewsets.ModelViewSet):
    serializer_class = AccessSerializer
    
    queryset = Access.objects.all()

    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request):
        return HttpResponse("result")

    @action(detail=True, methods=['post'])
    def send_contact(self, request, *args, **kwargs):
        user = self.get_object()
        print(user.name)
        print(res.data) 

        if request.method == 'POST':
            name = request.POST['name']
            number = request.POST['number']
            email = request.POST['email']
            jamatkhana = request.POST['jamatkhana']
            comments = request.POST['comments']

            message = "Number: " +number + "\nEmail: " + email  + "\nJamatkhana" + jamatkhana+ "\nComments: " + comments
            send_mail(subject=name,
                    message=message, from_email='aegisstormwind@gmail.com',
                    recipient_list=["fg3@williams.edu"], fail_silently=False)
            returnmsg = {"status_code": 200}

            return render(request, 'name.html', {"status_code": 200})
        else:
            return render(request, 'name.html', {"status_code": 500})