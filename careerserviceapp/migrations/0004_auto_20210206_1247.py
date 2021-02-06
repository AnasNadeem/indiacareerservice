# Generated by Django 3.1.6 on 2021-02-06 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careerserviceapp', '0003_socialnetwork'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialNetworkLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('title_class', models.CharField(max_length=50)),
                ('logo_class', models.CharField(max_length=50)),
                ('link', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='SocialNetwork',
        ),
    ]