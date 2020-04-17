from flask import Flask,render_template,request,session
# import mysql.connector
import pymongo
import socket
import json
import netifaces as ni
import time
import _thread

from flask_cors import CORS

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["blockchain"]
myUsers = myclient["blocsecUsers"]

app = Flask(__name__)
app.secret_key='secret'
CORS(app)

@app.route('/',methods=['GET'])
def sendDashboardPage():
    return render_template('index.html')

@app.route('/blocks',methods=['GET'])
def sendBlockchain():
    blockchain_view = mydb.blockchain.find()
    blockchain = []
    for blocks in blockchain_view:
        block = {
            "_id": str(blocks['_id']),
            "timestamp": str(blocks['timestamp']),
            "description": {
                "_id": str(blocks['_id']),
                "transaction_hash": str(blocks['transaction_hash']),
                "parent_hash": str(blocks['parent_hash']),
                "sender": str(blocks['sender']),
                "receiver": str(blocks['receiver']),
                "timestamp": str(blocks['timestamp']),
                "random_num": blocks['random_num'],
                "message": str(blocks['message']),
            }
        }
        blockchain.append(block)
    block = json.dumps(blockchain)
    return block

@app.route('/signup',methods=['POST'])
def signup():
    signup_data = json.loads(request.data)
    print(signup_data)
    myUsers.blocsecUsers.insert_one(signup_data)
    return json.dumps('success')

@app.route('/signin',methods=['POST'])
def signin():
    signin_data = json.loads(request.data)
    print(signin_data)
    ifUser = myUsers.blocsecUsers.count_documents({'username':signin_data['username'],'createPassword':signin_data['password']})
    if(ifUser==1):
        session['username']=signin_data['username']
        return json.dumps('success')
    return json.dumps('failed')

@app.route('/logout',methods=['GET'])
def logout():
    session.pop('username',None)
    return json.dumps('logout successful')

@app.route('/generate_new_transaction', methods=['POST'])
def new_transaction():
    global s
    tr=json.loads(request.data)
    print(tr)

    # - - - > The below code should be uncommented while testing < - - -

    # s = socket.socket()	
    # port = 5001
    # s.connect((str(ni.ifaddresses('wlan0')[ni.AF_INET][0]['addr']),port))
    # print(json.loads(s.recv(1024).decode('utf-8')))
    # tr = json.dumps(tr).encode('utf-8')
    # s.send(tr)
    # s.close()
    # time.sleep(3)

    # - - - > Till here < - - -

    return json.dumps('received transaction')

@app.route('/disconnect', methods=['GET'])
def disconnect_from_network():

    # - - - - - - - > The below code should be uncommented for disconnecting from network < - - - - - - -

    # global s
    # tr={
    #     'logout':1,
    # }
    # s = socket.socket()	
    # port = 5001
    # s.connect((str(ni.ifaddresses('wlan0')[ni.AF_INET][0]['addr']),port))
    # # print(json.loads(s.recv(1024).decode('utf-8')))
    # tr = json.dumps(tr).encode('utf-8')
    # s.send(tr)
    # s.close()
    # try:
    #     _thread.interrupt_main()
    # except KeyboardInterrupt:
    #     _thread.interrupt_main()
    #     pass
    # _thread.interrupt_main()

    # - - - - - - - - > Till here < - - - - - - - - 

    return json.dumps('successfully disconnected from network')

if __name__=='__main__':
    app.run(host='192.168.43.46', port=5004)