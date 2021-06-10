from django.shortcuts import render
from django.http import HttpResponse
from careerserviceapp.models import whyUs, Reviews, ourAchievement, AboutUs, ContactUs, Registration, SocialNetworkLink, keyWords, ContactDetails, MainText, CollegeWithUs
from django.contrib import messages
# Create your views here.
def home(request):
    whyus = whyUs.objects.all()
    reviews = Reviews.objects.all()
    ourachievement = ourAchievement.objects.all()
    aboutus = AboutUs.objects.all()
    socialPlat = SocialNetworkLink.objects.all()
    keywords = keyWords.objects.all()
    maintext = MainText.objects.all()
    college = CollegeWithUs.objects.all()
    context = {
        'whyUs': whyus,
        'reviews': reviews,
        'ourAchievement': ourachievement,
        'aboutUs': aboutus,
        'social': socialPlat,
        'keywrds': keywords,
        'maintxt': maintext,
        'colleges': college
    }
    return render(request, 'index.html', context)

def contactUs(request):
    contDetails = ContactDetails.objects.all()
    context = {
        'contact': contDetails
    }
    if request.method == 'POST':
        name = request.POST.get('submitter_name')
        email = request.POST.get('submitter_email')
        phone_num = request.POST.get('phone_num')
        message = request.POST.get('message')
        form = ContactUs(name=name, email=email, phone_num=phone_num, message=message)
        form.save()
        messages.info(request, f"{name}, your query has been registered successfully. We will be in touch very soon.")
    return render(request, 'contact.html', context)

def about(request):
    whyus = whyUs.objects.all()
    aboutus = AboutUs.objects.all()
    ourachievement = ourAchievement.objects.all()
    socialPlat = SocialNetworkLink.objects.all()
    keywords = keyWords.objects.all()
    context = {
        'whyUs': whyus,
        'aboutUs': aboutus,
        'ourAchievement': ourachievement,
        'social': socialPlat,
        'keywrds': keywords,
    }
    return render(request, 'about.html', context)

def joinUs(request):
    return render(request, 'joinUs.html')

def registration(request):
    if request.method == 'POST':
        student_name = request.POST.get('student_name')
        father_name = request.POST.get('father_name')
        phone_number = request.POST.get('phone_number')
        date_of_birth = request.POST.get('date_of_birth')
        email = request.POST.get('email')
        address = request.POST.get('address')
        pin_code = request.POST.get('pin_code')
        city = request.POST.get('city')
        state = request.POST.get('state')
        matric_marksheet = request.FILES.get('matric_marksheet')
        twelth_marksheet = request.FILES.get('twelth_marksheet')
        adhar_card = request.FILES.get('adhar_card')
        passport_size_photo = request.FILES.get('passport_size_photo')
        transfer_certificate = request.FILES.get('transfer_certificate')
        migration_certificate = request.FILES.get('migration_certificate')
        jee_mains = request.FILES.get('jee_mains')
        form = Registration(student_name=student_name, father_name=father_name, phone_number=phone_number, date_of_birth=date_of_birth,
        email=email, address=address, pin_code=pin_code, city=city, state=state, matric_marksheet=matric_marksheet, twelth_marksheet=twelth_marksheet, 
        adhar_card=adhar_card, passport_size_photo=passport_size_photo, transfer_certificate=transfer_certificate, migration_certificate=migration_certificate, jee_mains=jee_mains)
        form.save()
        messages.info(request, f"Successfully registered for {student_name}.We will be in touch very soon.")
        
    return render(request, 'register.html')