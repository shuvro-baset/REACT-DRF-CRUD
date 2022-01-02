from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from .serializers import StudentSerializer
from .models import Student
from rest_framework import parsers, renderers, status


# Create your views here.
class CreateStudentViewSet(ViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, format=None):

        serializer = StudentSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('name')
    serializer_class = StudentSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name')
        print(name)
        if name:
            return Student.objects.filter(name=name)
        else:
            return Student.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}
