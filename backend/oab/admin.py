from django.contrib import admin
from .models import Student

# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    """Student Administrator Class for Database Usage

    Args:
        admin ([ModelAdmin]): Django Model Admin SuperClass
    """
    # variables to display in admin file. 
    list_display =('student_id', 'address', 'city', 'zip_code', 'state', 'tract_id', 'neighborhood_rating', 'kfr')


admin.site.register(Student, StudentAdmin)