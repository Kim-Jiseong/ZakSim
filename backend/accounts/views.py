from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from . import models
from .models import Profile

# Create your views here.
class SignupView(APIView):
    def post(self, request):
        if not request.data['id']:  #ID 필드 공백일시
            return Response({"error": "ID is empty"})
        if not request.data['password1'] or not request.data['password2']:  #ID 필드 공백일시
            return Response({"error": "password is empty"})
        if not request.data['nickname']:  #닉네임 필드 공백일시
            return Response({"error": "Nickname is empty"})            
        if User.objects.filter(username=str(request.data['id'])).count() > 0: #ID가 이미 존재할 시
            return Response({"error": "ID is already in use"})
        if request.data['password1'] != request.data['password2']: #패스워드 불일치시
            return Response({"error": "Password don't match"})

        user = User.objects.create_user(username=request.data['id'], password=request.data['password1'])
        profile = models.Profile(user=user, nickname=request.data['nickname'])

        user.save()
        profile.save()

        token = Token.objects.create(user=user)
        return Response({"Token": token.key})

class GetPKbyToken(APIView):
    def get(self, request, format=None):
        print(request.user)
        userProfile = models.Profile.objects.get(user=request.user)
        return Response({"username": str(request.user),"pk": request.user.id, "nickname":userProfile.nickname})