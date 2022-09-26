# DocSeek Web App
## Deplyed Here: https://docseek.netlify.app/

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>

### SignUp 
![](https://github.com/AhindraD/DocSeek---Frontend/blob/master/images/rsz_1signup-login.png?raw=true)
<br>



We are a startup based in Silicon Valley and we would like you to build a platform which can connect patients with best doctors from around the world.
Here are the use cases of the platform we are trying to build:
- **Ease of Use**: Simple and clean UI which is easy for people from all age groups to use
- **One stop solution**: Find doctors from all fields, cardiology to neurology
- **Transparency**: All the doctors have ratings and patients can choose the best rated doctors, the patients also know the cost of the doctor before hand.
- **Repository of information**: All the patients previous records are saved and their history is recorded so that future consultations become better.
- **Ease of running clinic**: Doctors can manage their bookings and earnings from our platform, they can also see the patient history.

## Requirements
### Profile Creation
#### Doctor
The normal signup can be with email, name, and password, and after this we should ask the doctors to fill additional information as mentioned here:
- Qualification
- Experience
- Hospital
- Location
- Days and Time slots available 
- Speciality (can select multiple)

#### Patient
Patients should be able to sign up with their name, email, contact and password. They should have an option to login as well.
When patient creates an account we want to collect additional information about them like what diseases or discomforts they are suffering from, their blood group, weight, sex, age etc.

We also need to implement the password reset feature, where user can enter their email and they will receive the password reset link on the email

Information required for patients:
- Name
- Past Diseases 
  - Disease name, and for how long they have had it  
- Location
- Looking for

### Patient Frontend
- Can see the list of all doctors with their ratings, qualifications and cost.
- On selecting a doctor, will get pop-up with available time slots based on date chosen and can book the doctor
- Once booking is made, it will appear in their profile page under `Upcoming Consultations` 
- In their profile they can also see `Past consultations`


### Doctor Frontend
- Doctor will have dashboard like view, where they can see a calendar with upcoming bookings and today's bookings
- Doctor can also see their total consultations and earnings made in the given time frame
- Once the meeting's start time is near, the doctor can click on meeting and add their notes and prescription and mark meeting as done.

After meeting is marked as done from Doctor's side, the patient can then give rating to the doctor and a review, which will appear on Doctor's profile.



### Tech Stack
- React
- Express
- PostgreSQL

### Stretch: Integrate WebRTC to allow the calls on the platform itself.
