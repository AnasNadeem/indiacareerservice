from django.db import models

# Create your models here.
class whyUs(models.Model):
    logo = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    desc = models.TextField()

    def __str__(self):
        return self.title
    
class Reviews(models.Model):
    image = models.ImageField(upload_to='customer_reviews')
    name = models.CharField(max_length=100)
    desc = models.TextField()

    def __str__(self):
        return self.name
    
class ourAchievement(models.Model):
    logo = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    number = models.IntegerField()

    def __str__(self):
        return self.title

class AboutUs(models.Model):
    image = models.ImageField(upload_to='aboutUs')
    desc = models.TextField()

    def __str__(self):
        return self.desc
    
class Registration(models.Model):
    #Personal Details 
    student_name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    phone_number = models.BigIntegerField()
    date_of_birth = models.CharField(max_length=200)
    email = models.CharField(max_length=70)
    address = models.TextField()
    pin_code = models.CharField(max_length=6)
    city = models.CharField(max_length=70)
    state = models.CharField(max_length=70)
    #Documents Details
    matric_marksheet = models.FileField(upload_to='registered_user')
    twelth_marksheet = models.FileField(upload_to='registered_user')
    adhar_card = models.FileField(upload_to='registered_user')
    passport_size_photo = models.ImageField(upload_to='registered_user')
    transfer_certificate = models.FileField(upload_to='registered_user')
    migration_certificate = models.FileField(upload_to='registered_user')
    jee_mains = models.FileField(upload_to='registered_user')

    def __str__(self):
        return self.student_name + ' from ' + self.address + self.pin_code
    
class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_num = models.CharField(max_length=11)
    message = models.TextField()

    def __str__(self):
        return self.name + self.phone_num
    
class SocialNetworkLink(models.Model):
    title = models.CharField(max_length=50)
    title_class = models.CharField(max_length=50)
    logo_class = models.CharField(max_length=50)
    link = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    
class keyWords(models.Model):
    title = models.TextField()
    def __str__(self):
        return self.title

class ContactDetails(models.Model):
    address = models.TextField()
    phone_num = models.CharField(max_length=50)
    gmail = models.CharField(max_length=50)

    def __str__(self):
        return self.gmail

class MainText(models.Model):
    words = models.CharField(max_length=200)
    def __str__(self):
        return self.words

class CollegeWithUs(models.Model):
    image = models.ImageField(upload_to="college_us")
    link = models.CharField(max_length=200)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title