from django.db import models

class Lead(models.Model):
    name        = models.CharField(max_length=100)
    email       = models.EmailField(max_length=120, unique=True)
    country     = models.CharField(max_length=100)
    message     = models.TextField(blank=True)
    created_at  = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name
    
