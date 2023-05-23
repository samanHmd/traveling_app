from flask import Flask, request
from flask_restful import Api, Resource, fields, marshal_with
from modules.Models import User
from modules import bcrypt, db

user_filed = {
    'id': fields.Integer,
    'name': fields.String,
    'userName': fields.String,
    'email': fields.String,
    'password': fields.String,
}

class SignInController(Resource):
    @marshal_with(user_filed)
    def get(self):
        return 'register post'

    def post(self):
        users = User.query.all()
        print(users)
        try:
            password = request.form.get('password')
            hashed = bcrypt.generate_password_hash(password).decode('utf-8')
            user = User(name=request.form.get('name'), userName=request.form.get('userName'), email=request.form.get('email'), password=hashed)
            db.session.add(user)
        except Exception as e:
            print(str(e))
            db.session.rollback()
            return {'error': str(e)}, 400
        finally:
            db.session.commit()
            return request.form, 200

        