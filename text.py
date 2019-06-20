from flask import Flask, render_template, request

import json

app = Flask(__name__)
@app.route('/')

def index():
    return render_template('html_doc.html')

@app.route('/echo', methods=['GET'])
def echo():
    #data = request.form.get('data')
    data = [15,12,3]

    return json.dumps(data)



@app.route('/echo1', methods=['POST'])
def echo1():
    # data = request.form.get('data')
    data_1 = [5,8,12,4,['hello','hello'],8,6,5,15,3]

    return json.dumps(data_1)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)