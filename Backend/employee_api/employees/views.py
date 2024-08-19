from django.http import JsonResponse

# Local array of employee names
employees = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

# Endpoint to get all employee names
def get_employees(request):
    return JsonResponse({'employees': employees})

# Endpoint to get the count of employees
def get_employee_count(request):
    return JsonResponse({'count': len(employees)})
