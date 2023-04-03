from django.db import models

# Create your models here.

class Organization(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
class Team(models.Model):
    name = models.CharField(max_length=255)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='teams')
    
    def __str__(self):
        return self.name
    
class Personnel(models.Model):
    PLAYER = 'player'
    COACH = 'coach'
    MANAGER = 'manager'
    ROLE_CHOICES = (
        (PLAYER, 'Player'),
        (COACH, 'Coach'),
        (MANAGER, 'Manager'),
    )

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, choices=ROLE_CHOICES)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='personnel')

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"