from modules import db, app

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    userName = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    bookings = db.relationship('Booking', backref='user', lazy=True)

    def __repr__(self):
        return f"User(id={self.id}, name={self.name}, userName={self.userName}, email={self.email}, password={self.password})"

class Agent(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    userName = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    customer = db.Column(db.String, nullable=False)
    package = db.Column(db.Integer, nullable=False)
    totalPrice = db.Column(db.Integer, nullable=False)
    costumer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class Package(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    packageName = db.Column(db.Integer, unique=True, nullable=False)
    flights = db.Column(db.Integer, nullable=False)  
    hotels = db.Column(db.Integer, nullable=False)
    activities = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)


#Add app context here
with app.app_context():
    db.create_all()    