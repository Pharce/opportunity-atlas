from django.db import models
import pandas as pd

class Access(models.Model):
    name = models.CharField('name', max_length=100)
    number = models.CharField('number', max_length=100)
    email = models.CharField('email', max_length=100)
    jamatkhana = models.CharField('jamatkhana', max_length=100)
    comments = models.CharField('comments', max_length=100)



class School(models.Model):
    """[summary]

    Args:
        models ([Model]): Django model super class

    Returns:
        [id]: school_id
    """
    
    # school name
    school_name = models.CharField(
        "School Name",
        max_length=256
    )

    # geolocation
    school_lat = models.FloatField(
        default=-1,
        null=True,
        blank=True
    )
    school_long = models.FloatField(
        default=-1,
        null=True,
        blank=True
    )

    # ratings 
    akeb_rating = models.CharField(max_length=8,
        default="N",
        null=True,
        blank=True
    )
    niche_rating = models.CharField(max_length=8,
        default="N",
        null=True,
        blank=True
    )
    stanford_rating = models.CharField(max_length=8,
        default="N",
        null=True,
        blank=True
    )
    greatschools_rating = models.CharField(max_length=8,
        default="N",
        null=True,
        blank=True
    )
    test_rating = models.FloatField(
        default=-1,
        null=True,
        blank=True
    )
    equity_rating = models.FloatField(
        default=-1,
        null=True,
        blank=True
    )
    progress_rating = models.FloatField(
        default=-1,
        null=True,
        blank=True
    )


    def __str__(self):
        return self.school_name
    



class Student(models.Model):
    """Student Model for Backend Django Use

    Args:
        models ([Model]): Django Model super class

    Returns:
        [str]: String is student ID
    """    
    student_id  = models.CharField(
        "Student ID",
        max_length=8,
        primary_key=True
    )
    address     = models.CharField(
        "Address",
        max_length=1024
    )
    city        = models.CharField(
        "City",
        max_length=1024
    )
    state       = models.CharField(
        "State",
        max_length=64
    )

    zip_code    = models.CharField(
        "ZIP / Postal Code",
        max_length=12
    )

    tract_id    = models.CharField(
        "Tract ID",
        max_length=64
    )

    neighborhood_rating = models.CharField(
        "Neighborhood Rating",
        max_length=12
    )

    kfr         = models.CharField(
        "KFR",
        max_length = 12
    )

    def _str_(self):
        return self.student_id

