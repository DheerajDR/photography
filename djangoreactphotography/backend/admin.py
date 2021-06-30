from django.contrib import admin
from backend.models import Photo, Category

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('name', 'image', 's3_image_url', 'category', 'caption', 'date_taken', 'location', 'show', 'order')
    fields = [
        'image',
        's3_image_url',
        'name',
        'caption',
        'alt_text',
        'date_taken',
        'category',
        'location',
        'show',
        'order',
        ('alamy_url', 'fine_art_america_url'),
    ]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'slug', 'category_image', 'category_image_alt')
    fields = [
        'category_name',
        'slug',
        'category_image',
        'category_image_alt',
    ]