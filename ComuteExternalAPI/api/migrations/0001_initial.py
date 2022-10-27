# Generated by Django 4.1.2 on 2022-10-27 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('driver_name', models.CharField(max_length=100)),
                ('driver_surname', models.CharField(max_length=100)),
                ('vehicle', models.CharField(max_length=100)),
                ('vehicle_registration', models.CharField(max_length=200)),
                ('date_registered', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
