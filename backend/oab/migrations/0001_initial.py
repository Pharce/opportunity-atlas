# Generated by Django 3.1.4 on 2020-12-27 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Access',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
                ('number', models.CharField(max_length=100, verbose_name='number')),
                ('email', models.CharField(max_length=100, verbose_name='email')),
                ('jamatkhana', models.CharField(max_length=100, verbose_name='jamatkhana')),
                ('comments', models.CharField(max_length=100, verbose_name='comments')),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school_name', models.CharField(max_length=256, verbose_name='School Name')),
                ('school_lat', models.FloatField()),
                ('school_long', models.FloatField()),
                ('akeb_rating', models.FloatField()),
                ('niche_rating', models.FloatField()),
                ('stanford_rating', models.FloatField()),
                ('greatschools_rating', models.FloatField()),
                ('test_rating', models.FloatField()),
                ('equity_rating', models.FloatField()),
                ('progress_rating', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('student_id', models.CharField(max_length=8, primary_key=True, serialize=False, verbose_name='Student ID')),
                ('address', models.CharField(max_length=1024, verbose_name='Address')),
                ('city', models.CharField(max_length=1024, verbose_name='City')),
                ('state', models.CharField(max_length=64, verbose_name='State')),
                ('zip_code', models.CharField(max_length=12, verbose_name='ZIP / Postal Code')),
                ('tract_id', models.CharField(max_length=64, verbose_name='Tract ID')),
                ('neighborhood_rating', models.CharField(max_length=12, verbose_name='Neighborhood Rating')),
                ('kfr', models.CharField(max_length=12, verbose_name='KFR')),
            ],
        ),
    ]
