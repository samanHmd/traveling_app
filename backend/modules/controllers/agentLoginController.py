from flask import Flask
from flask_restful import Api, Resource, request
from modules.Models import Agent
from modules import bcrypt, app
import jwt
from datetime import datetime, timedelta


class AgentLoginController(Resource):
    def get(self):
        return "agent login get"

    def post(self):
        agent = Agent.query.filter_by(userName=request.form.get('userName')).first()
        print()
        if agent and bcrypt.check_password_hash(agent.password, request.form.get('password')):
            encoded_jwt = jwt.encode({'user_id':agent.id, 'expiration': str(datetime.utcnow() + timedelta(seconds=172800))}, app.config['SECRET_KEY'], algorithm="HS256")
            return {"status": "success","api_token": encoded_jwt}, 200
        else:
            return { "status": "fail" }