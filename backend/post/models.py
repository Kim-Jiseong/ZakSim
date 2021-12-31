from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    finished_at = models.DateTimeField(null=True)                      #완료일
    created_at = models.DateTimeField(default=timezone.now)   #만들어진 날짜
    success = models.BooleanField(default=False)

    def __str__(self):
        """A string representation of the model."""
        return self.title