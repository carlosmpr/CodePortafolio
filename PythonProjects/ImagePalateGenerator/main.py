from flask import Flask, render_template, request, flash, redirect,url_for
from werkzeug.utils import secure_filename
import os
from PIL import Image
import colorgram
import webcolors


UPLOAD_FOLDER = 'your folder to upload image'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def start_page():
    return render_template('index.html')


def bgr_to_hex(bgr):
   rgb =list(bgr)
   rgb.reverse()
   return webcolors.rgb_to_hex(tuple(rgb))

def FindColors(image):
    color_hex = []
    for i in image:
        for  j in i:
            j = list(j)
            color_hex.append(bgr_to_hex(tuple(j)))
    return set(color_hex)


@app.route('/img', methods=["POST"])
def receive_data():
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']

    if file.filename == '':
        flash('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        my_image = Image.open(f'./static/{filename}')
        colors = colorgram.extract(my_image, 10)
        color_hex = []
        for color in colors:
            (a,b,c ) = color.rgb
            hex = '#{:02x}{:02x}{:02x}'.format(a, b , c)
            color_hex.append(hex)

    return render_template('image.html', image=filename , colors=color_hex)



if __name__ == "__main__":
    app.run(debug=True)





