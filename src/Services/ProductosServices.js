import firebase from '../Config/firebase';

export async function getAllProductos(){
    const querySnapshot = await firebase.db.collection("productos")
          .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
          .get()
    
}
export async function crearProducto(data){
    return await firebase.db.collection("productos")
        .add(data)
}