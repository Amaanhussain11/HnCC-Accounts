from flask import Flask, render_template, request, redirect, session 
import pyrebase

app = Flask(__name__, template_folder='HNCC-ACCOUNTS')

config = {
  'apiKey': "AIzaSyB97jiswJvvPHH8rWytwL4mneRoVuTO9Z8",
  'authDomain': "authentication-9973a.firebaseapp.com",
  'projectId': "authentication-9973a",
  'storageBucket': "authentication-9973a.appspot.com",
  'messagingSenderId': "620596374683",
  'appId': "1:620596374683:web:f09e04c4f34e0223f42a3e",
  'measurementId': "G-RJLEP25CTQ",
  'databaseURL': ""
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

app.secret_key = "Secret"

@app.route('/', methods = ['POST', 'GET'])

def index():
  if request.method == 'POST':
    email = request.form.get('email')
    password = request.form.get('Password')
    
    try:
      user = auth.sign_in_with_email_and_password(email, password)
      session['user'] = email
      
    except:
      return "Failed to Login"
    
    return render_template('index.html')

@app.route('/logout')

def logout():
    pass

if __name__ == '__main__':
    app.run(debug= True)
    