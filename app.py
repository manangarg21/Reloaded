from flask import request,Flask, json, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)


CORS(app)

@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    name = data['song_name']
    artist = data['artist']
    dur = data['duration']
    conn = sqlite3.connect('songs.db')
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM data WHERE name=?",(name,))
    rows = cursor.fetchall()
    if len(rows) > 0:
        
        conn.close()
        response = jsonify(
            {'status': 'error', 'message': 'Song already exists.'})
        return response
       
    else:
        cursor.execute("INSERT INTO data (name, artist, duration) VALUES (?, ?, ?)", (name, artist, dur))
        conn.commit()
        conn.close()
        response = jsonify({'status': 'success'})
        return response


@app.route('/api')
def get_data():
    conn = sqlite3.connect('songs.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM data')
    data = cursor.fetchall()
    conn.commit()
    conn.close()
    jsonlist = []
    for song in data:
        jsondict = {}
        jsondict['id'] = song[0]
        jsondict['name'] = song[1]
        jsondict['artist'] = song[2]
        jsondict['duration'] = song[3]
        jsonlist.append(jsondict)
    return jsonify(jsonlist)


@app.route('/api/delete', methods=['POST', 'GET'])
def del_data():
    print(request.json)
    response = {'message': 'Song deleted'}
    id = request.json.get('id')
    conn = sqlite3.connect('songs.db')
    cursor = conn.cursor()
    cursor.execute(f'DELETE FROM data WHERE id="{id}";')
    conn.commit()
    conn.close()
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(port=5001, debug=True)
