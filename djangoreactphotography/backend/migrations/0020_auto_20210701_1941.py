# Generated by Django 3.1.2 on 2021-07-01 19:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0019_person'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Person',
            new_name='Message',
        ),
    ]