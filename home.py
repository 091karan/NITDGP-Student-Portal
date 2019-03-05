
from flask import Flask,redirect,url_for,request
from flask import render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    roll_no = db.Column(db.String(60),primary_key=True)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(120))
    password = db.Column(db.String(60))
    branch = db.Column(db.String(60))
    semester = db.Column(db.String(60))
    graduation_year = db.Column(db.String(60))

    def __repr__(self):
        return f"User('{self.first_name}','{self.last_name}','{self.roll_no}')"


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register',methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        email = request.form['email']
        password = request.form['psw']
        roll_no = request.form['roll']
        branch = request.form['dept']
        semester = request.form['sem']
        graduation_year = request.form['graduation']

        user = User(roll_no=roll_no,first_name=first_name,last_name=last_name,email=email,password=password,branch=branch,semester=semester,graduation_year=graduation_year)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for('login'))
    return render_template('register.html')


@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/admin')
def admin():
    users = User.query.all()
    print('ashjadshsad')
    print(users)
    return render_template('admin.html',users=users)

if __name__ == '__main__':
    app.run(debug=True)
