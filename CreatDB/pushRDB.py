import gspread
import qrcode
import pyrebase
import time
from PIL import Image, ImageOps

config_sto = {
    "apiKey": "AIzaSyBXTxMWGI0O1zNiTnQGFemxQ8EDthDHyAY",
    "authDomain": "qrgdg-545ed.firebaseapp.com",
    "databaseURL": "https://qrgdg-545ed-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "qrgdg-545ed",
    "storageBucket": "qrgdg-545ed.appspot.com",
    "messagingSenderId": "480354373204",
    "appId": "1:480354373204:web:6e296b5075f386aaaba7c1",
    "measurementId": "G-1VGHRDN76Z"
}


  
firebase = pyrebase.initialize_app(config_sto)
storage = firebase.storage()

db = firebase.database()


auth=firebase.auth()
email = "hoangdinh.msi@gmail.com"
password = "Notforsale314#"
user = auth.sign_in_with_email_and_password(email,password)
val=""

def gen(val, cell,scale_factor):
    storage.child(name_img).put(name_img) 
    url = storage.child(name_img).get_url(user['idToken'])
    new_data={"name":val_name,"Email":val_email,"id":val_id,"URL":val_url, "check": True,"phone":val_sdt,"note_2":2}
    db.child().child('bwai').child(val_id).set(new_data)
    wks.update(cell_url,url)

sa = gspread.service_account("/home/hoang/Code/QR/serviceAccount.json")
sh = sa.open("QR")
wks = sh.worksheet("bwai")

for i in range(325,338):
    cell_id = "C"+str(i)
    name_id="A"+str(i)
    email_id="B"+str(i)
    cell_url = "D" + str(i)
    cell_Sdt="E"+str(i)
    val_id = wks.acell(cell_id).value
    val_name = wks.acell(name_id).value
    val_email = wks.acell(email_id).value
    val_url = wks.acell(cell_url).value
    val_sdt=wks.acell(cell_Sdt).value
    gen(val_id,cell_url,1.28)
    time.sleep(2)


