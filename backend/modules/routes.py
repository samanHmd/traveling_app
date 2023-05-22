from flask import Flask
from flask_restful import Api, Resource
from modules import app
from modules.controllers.homeController import HomeController
from modules.controllers.singinController import SignInController
from modules.controllers.loginController import LoginController

api = Api(app)

api.add_resource(HomeController, '/')
api.add_resource(SignInController, '/register')
api.add_resource(LoginController, '/login')    