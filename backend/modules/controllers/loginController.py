from flask import Flask
from flask_restful import Api, Resource, request
from modules.Models import User
from modules import bcrypt, app
import jwt
from datetime import datetime, timedelta


class LoginController(Resource):
    def get(self):
        
        decoded_jwt = jwt.decode(request.form.get('api_token'), app.config['SECRET_KEY'], algorithms=["HS256"])
        return decoded_jwt

    def post(self):
        user = User.query.filter_by(userName=request.form.get('userName')).first()
        print()
        if user and bcrypt.check_password_hash(user.password, request.form.get('password')):
            encoded_jwt = jwt.encode({'user_id':user.id, 'expiration': str(datetime.utcnow() + timedelta(seconds=172800))}, app.config['SECRET_KEY'], algorithm="HS256")
            return {"status": "success","api_token": encoded_jwt}, 200
        else:
            return { "status": "fail" }