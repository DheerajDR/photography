# Generated by Django 3.1.2 on 2021-06-30 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0017_auto_20210630_2023'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='order',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
