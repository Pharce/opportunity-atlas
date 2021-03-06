# Generated by Django 3.1.4 on 2020-12-27 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('oab', '0002_auto_20201227_1847'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='akeb_rating',
            field=models.CharField(blank=True, default='N', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='equity_rating',
            field=models.FloatField(blank=True, default=-1, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='greatschools_rating',
            field=models.CharField(blank=True, default='N', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='niche_rating',
            field=models.CharField(blank=True, default='N', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='progress_rating',
            field=models.FloatField(blank=True, default=-1, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='school_lat',
            field=models.FloatField(blank=True, default=-1, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='school_long',
            field=models.FloatField(blank=True, default=-1, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='stanford_rating',
            field=models.CharField(blank=True, default='N', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='school',
            name='test_rating',
            field=models.FloatField(blank=True, default=-1, null=True),
        ),
    ]
