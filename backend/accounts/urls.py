from django.urls import path, include
from . import views
urlpatterns = [ 
    path('signup/', views.SignupView.as_view()), #username까지 받을 수 있는 회원가입
    path('getpk/', views.GetPKbyToken.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
]
