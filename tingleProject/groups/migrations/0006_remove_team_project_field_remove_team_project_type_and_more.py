# Generated by Django 5.2.3 on 2025-06-24 07:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0005_comment_created_at'),
        ('projects', '0006_alter_post_project_type_alter_post_start_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='project_field',
        ),
        migrations.RemoveField(
            model_name='team',
            name='project_type',
        ),
        migrations.AddField(
            model_name='team',
            name='project',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='projects.post'),
            preserve_default=False,
        ),
    ]
