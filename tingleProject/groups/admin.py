from django.contrib import admin
from .models import Team, TeamMember, Comment
# Register your models here.
admin.site.register(Team)
admin.site.register(TeamMember)
admin.site.register(Comment)