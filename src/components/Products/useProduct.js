



// import {data} from './data';
import {useEffect, useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
// import store from '../Config/store';

import { fetchProducts } from "../../redux/actions/productAction";

export function useProduct()
{
    


    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    


    // const students = useSelector(state => state.studentReducer.students)
    const products = useSelector(state=>state.productReducer.products)

    console.log("students from studentReducer",products);
    // setStudent(students)


    useEffect( ()=> {

        dispatch(fetchProducts(setLoading))

    } , [])



    const addtoFav = ()=> {
        alert("Click on Single Item for Add to Favourite Item Collection")
    }


    return[products ,loading , addtoFav]
}