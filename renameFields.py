import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate('../ServiceAccountKey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

def migrate_stock_field():
    print('Empezando...')
    products_ref = db.collection('products_storage')
    docs = products_ref.stream()
    batch = db.batch()
    batch_count = 0
    total_processed = 0

    for doc in docs:
        data = doc.to_dict()
        old_value = data.get('Cant. Disp. ')
        if old_value is not None:
            doc_ref = products_ref.document(doc.id)
            batch.update(doc_ref, {
                'stock': old_value,
                'Cant. Disp. ': firestore.DELETE_FIELD
            })
            batch_count += 1
            total_processed += 1

            if batch_count >= 500:
                batch.commit()
                batch = db.batch()
                batch_count = 0
                print(f'Documentos procesados: {total_processed}')

    if batch_count > 0:
        batch.commit()

    print(f'Fin con: {total_processed} documentos')

if __name__ == '__main__':
    migrate_stock_field()