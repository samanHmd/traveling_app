from flask import Flask
from flask_restful import Api, Resource


class HomeController(Resource):
    def get(self):
        return "Home Get"

    def post(self):
        return "Home Post"   