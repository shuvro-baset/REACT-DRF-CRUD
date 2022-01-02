from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'student_register_app'
urlpatterns = [
    path('add-student', views.CreateStudentViewSet.as_view({'post': 'create'}), name="add-student"),
    path('get-student', views.StudentViewSet.as_view({'get': 'list'}), name="students"),
    # path('inventory/<int:id>/', views.SingleInventoryViewSet.as_view({'get': 'retrieve'}), name="single_inventory"),
]
