# import necessary libraries
import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/employee_attrition.sqlite"

db = SQLAlchemy(app)

#Reflect the table with all of the columns corresponding to each Belly Button collection event.
class Employees(db.Model):
    __tablename__ = 'employees'
    db.reflect()

@app.before_first_request
def setup():
    # Connect the samples_metadata table to our server (the other ones should be created already)
    db.create_all()

@app.route("/")
def index():
    """Return the dashboard hompage"""
    return render_template('index.html')

@app.route('/database')
def samples_sample():
    """Proof of completed database and Flask connection"""
    #Query database for first 10 results
    results = db.session.query(Employees.EmployeeNumber, Employees.Age).\
        limit(10).all()
    
    employee_number = [result[0] for result in results]
    age = [result[1] for result in results]
    
    first_trace = {
        "Employee Number": employee_number,
        "AGE": age
    }
    return jsonify(first_trace)

#Run the app. debug=True is essential to be able to rerun the server any time changes are saved to the Python file
if __name__ == "__main__":
    app.run(debug=True)