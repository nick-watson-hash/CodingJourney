# Generated by Django 2.2 on 2021-08-06 05:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas_app', '0003_auto_20210805_2117'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ninjas',
            name='dojo',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ninja', to='dojo_ninjas_app.Dojos'),
        ),
    ]
