import React, { useEffect } from 'react'
import axios from 'axios';
import * as IntProd from '../models/Product'

const baseURL = "https://6026bada186b4a001778088c.mockapi.io/adrtseries"
//const baseURL = "http://localhost:8080/rateexchange"


let viewProduct: IntProd.ProductInterface[] = []


export class ProductService {

    getProductsSmall() {
        return fetch(baseURL).then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get<IntProd.ProductInterface[]>(baseURL).then(d => d.data);
    }



    // const getData = async () => {
    //     try {
    //         const res = await axios.get<IntProd.ProductInterface[]>(baseURL);
    //         const mobileData = await res.data;
    //         //setMobiles(mobileData);
    //         return mobileData
    //         console.log(mobileData)
    //     } catch (error) {
    //         return error;
    //     }
    // }
}
