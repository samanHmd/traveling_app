from flask import Flask
from flask_restful import Api, Resource


class LoginController(Resource):
    def get(self):
        return "Login Get git"

    def post(self):
        return "Login Post git"   