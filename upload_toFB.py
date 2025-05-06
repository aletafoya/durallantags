import openpyxl
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("ServiceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

wb = openpyxl.load_workbook("INVENTARIO.xlsx")
sheet = wb.active

raw_h = [cell.value for cell in sheet[1]]
headers = []

for i in raw_h:
    if i is not None:
        headers.append(i)

print(headers)

for row in sheet.iter_rows(min_row=2, values_only=True):
    record = dict(zip(headers, row))
    db.collection("products_storage").add(record)

print("Completado")