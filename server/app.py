import time
from flask import Flask
app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}
    app.run('127.0.0.1', 5000, debug = True

#commit test
