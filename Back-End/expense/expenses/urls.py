from django.urls import path

from . import views

urlpatterns = [
    path('expense', views.expenseCRUD.as_view(), name="expenses"),
] 