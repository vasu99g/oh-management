from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "key"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///static/oh-management.sqlite3"

db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    zoom_id = db.Column(db.String(15))

    def __init__(self, name, email, zoom_id):
        self.name = name
        self.email = email
        self.zoom_id = zoom_id


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/student_dashboard/<student_id>")
def student_dashboard(student_id):
    return render_template("student_dashboard.html")


@app.route("/student_login", methods=["POST"])
def student_login():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        zoom_id = request.form["zoom_id"]

        student = Student(name, email, zoom_id)
        db.session.add(student)
        db.session.commit()

        return redirect(url_for("student_dashboard", student_id=student.id))


if __name__ == "__main__":
    app.run()
