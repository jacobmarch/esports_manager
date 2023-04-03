from django.urls import path
from . import api_views

urlpatterns = [
    path('organizations/', api_views.OrganizationList.as_view(), name='OrganizationList'),
    path('organizations/<int:pk>/', api_views.OrganizationDetail.as_view(), name='OrganizationDetail'),
    path('teams/', api_views.TeamList.as_view(), name='TeamList'),
    path('teams/<int:pk>/', api_views.TeamDetail.as_view(), name='TeamDetail'),
    path('personnel/', api_views.PersonnelList.as_view(), name='PersonnelList'),
    path('personnel/<int:pk>/', api_views.PersonnelDetail.as_view(), name='PersonnelDetail')
]