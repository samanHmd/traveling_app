from flask import Flask
from flask_restful import Api, Resource, request
from modules.Models import User
from modules import bcrypt, app
import jwt
from datetime import datetime, timedelta


class LoginController(Resource):
    def get(self):
        data = request.get_json()
        decoded_jwt = jwt.decode(data.get('api_token'), app.config['SECRET_KEY'], algorithms=["HS256"])
        return decoded_jwt

    def post(self):
        data = request.get_json()
        user = User.query.filter_by(userName=data.get('userName')).first()
        print()
        if user and bcrypt.check_password_hash(user.password, data.get('password')):
            encoded_jwt = jwt.encode({'user_id':user.id, 'expiration': str(datetime.utcnow() + timedelta(seconds=172800))}, app.config['SECRET_KEY'], algorithm="HS256")
            return {"status": "success","api_token": encoded_jwt}, 200
        else:
            return { "status": "fail" }