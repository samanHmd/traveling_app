from flask import Flask
from flask_restful import Api, Resource
from controllers.homeController import HomeController
from controllers.singinController import SignInController
from controllers.loginController import LoginController

app = Flask(__name__)
api = Api(app)



api.add_resource(HomeController, '/')
api.add_resource(SignInController, '/register')
api.add_resource(LoginController, '/login')     

if __name__ == "__main__":
    app.run(debug=True)
