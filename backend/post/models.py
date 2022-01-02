from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    deadline = models.DateField(null=True)
    finished_at = models.DateField(null=True)                      #완료일
    created_at = models.DateTimeField(default=timezone.now)   #만들어진 날짜
    COLOR_CHOICES = (
    ('basic','BASIC'),
    ('dday', 'DDAY'),
    ('d+','D+'),
    )
    type = models.CharField(max_length=10, choices=COLOR_CHOICES, default='basic')
    success = models.BooleanField(default=False)

    
    def __str__(self):
        """A string representation of the model."""
        return self.title

class Comment(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        """A string representation of the model."""
        return self.content