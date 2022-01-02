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


class SingleStudentViewSet(ViewSet):
    queryset = Student.objects.all()

    def retrieve(self, request, id, format=None):

        student_ins = Student.objects.filter(pk=id).first()
        print(student_ins)
        if student_ins:
            serializer = StudentSerializer(student_ins, context={'request': request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

class UpdateStudentViewSet(ViewSet):
    queryset = Student.objects.all()

    def patch(self, request, id, format=None):
        student_ins = Student.objects.filter(pk=id).first()
        print(student_ins)
        if student_ins:
            serializer = StudentSerializer(student_ins, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteStudentViewSet(ViewSet):
    queryset = Student.objects.all()

    def delete(self, request, id, format=None):
        student_ins = Student.objects.filter(pk=id).first()
        print(student_ins)
        if student_ins:
            student_ins.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
