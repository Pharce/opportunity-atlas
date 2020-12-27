from django.contrib import admin
from .models import Student, School, Access

# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    """Student Administrator Class for Database Usage

    Args:
        admin ([ModelAdmin]): Django Model Admin SuperClass
    """
    # variables to display in admin file. 
    list_display =('student_id', 'address', 'city', 'zip_code', 'state', 'tract_id', 'neighborhood_rating', 'kfr')

class SchoolAdmin(admin.ModelAdmin):
    """Student Administrator Class for Database Usage

    Args:
        admin ([ModelAdmin]): Django Model Admin SuperClass
    """
    list_display = ('school_name', 'school_lat', 'school_long', 'akeb_rating', 'niche_rating', 'stanford_rating', 'greatschools_rating', 'test_rating', 'equity_rating', 'progress_rating')

class AccessAdmin(admin.ModelAdmin):
    list_display = ('name', 'number', 'email', 'jamatkhana', 'comments')


admin.site.register(Student, StudentAdmin)
admin.site.register(School, SchoolAdmin)
admin.site.register(Access, AccessAdmin)