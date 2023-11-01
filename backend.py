import pyrebase, flask

config = {
  'apiKey': "AIzaSyA4k6MqyRnMZcutm1Ea9S5dBnF_KVFmoY8",
  'authDomain': "hncc-accounts-545ab.firebaseapp.com",
  'projectId': "hncc-accounts-545ab",
  'storageBucket': "hncc-accounts-545ab.appspot.com",
  'messagingSenderId': "273939710419",
  'appId': "1:273939710419:web:6944c53a0f8ea7d28aef26",
  'measurementId': "G-TP0SXVJJ01",
  'databaseURL': ''
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db=firebase.database()
storage=firebase.storage()

#app = flask(__name__)

email = 'teshtbhi@gmail.com'
password = '123456'

user = auth.create_user_with_email_and_password(email,password)

print(user)
