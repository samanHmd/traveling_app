from flask import Flask
from flask_restful import Api, Resource


class SignInController(Resource):
    def get(self):
        return "Singin Get git"

    def post(self):
        return "Signin Post git"   