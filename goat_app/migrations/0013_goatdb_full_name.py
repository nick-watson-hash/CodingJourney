# Generated by Django 2.2 on 2021-09-16 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goat_app', '0012_goat_full_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='goatdb',
            name='full_name',
            field=models.CharField(default='blank', max_length=55),
            preserve_default=False,
        ),
    ]
