from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'wishes/home.html')

def messi(request):
    return render(request, 'wishes/messi.html')

def speed(request):
    return render(request, 'wishes/speed.html')

def message(request):
    return render(request, 'wishes/message.html')

def why(request):
    return render(request, 'wishes/why.html')

def gallery(request):
    return render(request, 'wishes/gallery.html')

def countdown(request):
    return render(request, 'wishes/countdown.html')

def memories(request):
    return render(request, 'wishes/memories.html')