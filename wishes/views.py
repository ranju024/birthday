from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'wishes/home.html')

def message(request):
    return render(request, 'wishes/message.html')

def gallery(request):
    return render(request, 'wishes/gallery.html')

def countdown(request):
    return render(request, 'wishes/countdown.html')

def gift(request):
    return render(request, 'wishes/gift.html')

def default(request):
    return render(request, 'wishes/default.html')

def message1(request):
    return render(request, 'wishes/message1.html')

def message2(request):
    return render(request, 'wishes/message2.html')