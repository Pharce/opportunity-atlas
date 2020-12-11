from django.db import models
import pandas as pd

class School(models.Model):
    """[summary]

    Args:
        models ([Model]): Django model super class

    Returns:
        [id]: school_id
    """

    school_id = models.CharField(
        "School ID",
        max_length=100,
        primary_key=False
    )

    school_name = models.CharField(
        "School Name",
        max_length=256
    )


    school_address = models.CharField(
        "School Address",
        max_length=256
    )


    school_city = models.CharField(
        "School City",
        max_length=128
    )

    school_state = models.CharField(
        "School State",
        max_length=16
    )

    school_zip   = models.CharField(
        "School Zip",
        max_length=16
    )

    school_rank = models.CharField(
        "School Ranking",
        max_length=16
    )

    school_lat = models.CharField(
        "School Latitude",
        max_length=16
    )

    school_long = models.CharField(
        "School Longitude",
        max_length=16
    )

    school_tract = models.CharField(
        "Tract ID",
        max_length=16
    )

    akeb_rating = models.CharField(
        "AKEB Rating",
        max_length=4
    )

    niche_rating = models.CharField(
        "Niche Rating",
        max_length=4
    )

    stanford_rating = models.CharField(
        "Stanford Rating",
        max_length=4
    )

    greatschools_rating = models.CharField(
        "GreatSchools Rating",
        max_length=4
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

