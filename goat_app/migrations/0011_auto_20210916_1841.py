# Generated by Django 2.2 on 2021-09-16 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goat_app', '0010_user_vote'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goat',
            old_name='goat_id',
            new_name='api_id',
        ),
        migrations.RenameField(
            model_name='goatdb',
            old_name='goat_id',
            new_name='api_id',
        ),
    ]
