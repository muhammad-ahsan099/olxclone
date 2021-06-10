


import { db } from "../../config/firebase";
import { FETCH_PRODUCT  } from "../type/type"; 


export const fetchProducts =  (setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        let snapshot = await db.collection('products').get() ;
        let products = [] ;
        snapshot.forEach((doc)=>{
            products.push({
                docID: doc.id ,
                ...doc.data(),
            })
        })

    console.log("Data fetch from firestore" , products);
        dispatch({
            type: FETCH_PRODUCT ,
            payload: products
        })


        
    } catch (error) {
        console.log("Error in Fetching Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}



