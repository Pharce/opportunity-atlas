from django.db import models


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