# Generated by Django 4.1 on 2022-08-29 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anagramhunt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ahgametrack',
            name='game_type',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='ahgametrack',
            name='score',
            field=models.CharField(max_length=50),
        ),
    ]
