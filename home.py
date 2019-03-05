
from flask import Flask,redirect,url_for,request,session
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    email = db.Column(db.String(120),primary_key=True)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    date_of_birth = db.Column(db.String(50))
    address = db.Column(db.String(1200))
    contact = db.Column(db.String(40))
    category = db.Column(db.String(40))
    password = db.Column(db.String(60))
    roll_no = db.Column(db.String(60))
    graduation_year = db.Column(db.String(60))
    backlogs = db.Column(db.String(60))
    branch = db.Column(db.String(60))
    semester = db.Column(db.String(60))
    photo = db.Column(db.String(250))
    sgpa1 = db.Column(db.String(40))
    sgpa2 = db.Column(db.String(40))
    sgpa3 = db.Column(db.String(40))
    sgpa4 = db.Column(db.String(40))
    sgpa5 = db.Column(db.String(40))
    sgpa6 = db.Column(db.String(40))
    sgpa7 = db.Column(db.String(40))


    def __repr__(self):
        return f"User('{self.first_name}','{self.last_name}','{self.email}')"


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register',methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        date_of_birth = request.form['dateOfBirth']
        email = request.form['email']
        address = request.form['address']
        contact = request.form['contact']
        category = request.form['category']
        password = request.form['psw']

        user = User(first_name=first_name,last_name=last_name,date_of_birth=date_of_birth,email=email,address=address,password=password,contact=contact,category=category)
        db.session.add(user)
        db.session.commit()

        session['current_user'] = email

        return render_template('registration2.html')

    return render_template('register.html')


@app.route('/registerStudent',methods=['GET', 'POST'])
def registerStudent():
    if request.method == 'POST':

        user = User.query.filter(User.email.in_([POST_EMAIL])).first()

        roll_no = request.form['roll']
        graduation_year = request.form['graduation']
        backlogs = request.form['backlogs']
        branch = request.form['dept']
        semester = request.form['sem']
        photo = request.files['photo']
        sgpa1 = request.form['sgpa1']
        sgpa2 = request.form['sgpa2']
        sgpa3 = request.form['sgpa3']
        sgpa4 = request.form['sgpa4']
        sgpa5 = request.form['sgpa5']
        sgpa6 = request.form['sgpa6']
        sgpa7 = request.form['sgpa7']

        user.roll_no = roll_no
        user.graduation_year = graduation_year
        user.backlogs = backlogs
        user.branch = branch
        user.semester = semester
        user.photo = photo
        user.sgpa1 = sgpa1
        user.sgpa2 = sgpa2
        user.sgpa3 = sgpa3
        user.sgpa4 = sgpa4
        user.sgpa5 = sgpa5
        user.sgpa6 = sgpa6
        user.sgpa7 = sgpa7

        db.session.commit()

        session.pop('current_user', None)

        return redirect(url_for('login'))

    return render_template('registration2.html')


@app.route('/login',methods=['GET', 'POST'])
def login():
    if request.method == 'POST':

        POST_EMAIL = str(request.form['email'])
        POST_PASSWORD = str(request.form['password'])

        query = User.query.filter(User.email.in_([POST_EMAIL]), User.password.in_([POST_PASSWORD]) )
        result = query.first()
        if result:
            session['logged_in'] = True
            sessin['current_user'] = POST_EMAIL
            return render_template('home.html')
        else:
            print('WRONG PASSWORD')
            return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/logout')
def logout():
    session['logged_in'] = False
    session.pop('current_user', None)
    return redirect(url_for('home'))

@app.route('/resetPassword',methods=['GET', 'POST'])
def resetPassword():
    if request.method == 'POST':
        POST_PASSWORD = str(request.form['psw1'])
        POST_EMAIL = session['current_user']
        query = User.query.filter(User.email.in_([POST_EMAIL]), User.password.in_([POST_PASSWORD]) )
        result = query.first()
        result.password = POST_PASSWORD
        db.session.commit()

        return redirect(url_for('home'))

    return render_template('change_password.html')

@app.route('/admin')
def admin():
    users = User.query.all()
    print(users)
    return render_template('admin.html',users=users)

if __name__ == '__main__':
    app.secret_key = os.urandom(12)
    app.run(debug=True)
