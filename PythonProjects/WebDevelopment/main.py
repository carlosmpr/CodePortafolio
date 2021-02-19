from flask import Flask ,render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html' ,message="Welcome to my python portafolio project")


app.run()