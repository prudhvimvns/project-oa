from django.urls import path
from .views import get_employees, get_employee_count

urlpatterns = [
    path('api/employees/', get_employees),
    path('api/employees/count/', get_employee_count),
]
