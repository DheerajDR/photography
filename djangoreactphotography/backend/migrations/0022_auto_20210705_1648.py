# Generated by Django 3.1.2 on 2021-07-05 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0021_photo_subcategory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='image',
        ),
        migrations.AlterField(
            model_name='category',
            name='category_name',
            field=models.CharField(choices=[('Animals', 'Animals'), ('Architecture', 'Architecture'), ('Insects and Spiders', 'Insects and Spiders'), ('Landscapes and Nature', 'Landscapes and Nature'), ('Meteorology', 'Meteorology'), ('Plants and Flowers', 'Plants and Flowers'), ('Seasons', 'Seasons')], max_length=100),
        ),
    ]
