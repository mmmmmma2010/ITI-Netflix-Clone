# Generated by Django 3.2.9 on 2021-12-15 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_video_rate'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='cat1',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='video',
            name='cat2',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='video',
            name='cat3',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
    ]
