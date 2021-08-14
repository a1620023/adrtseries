import React from 'react'
import axios from 'axios';
import * as IntProd from '../../models/Product'

const baseURL = "https://6026bada186b4a001778088c.mockapi.io/adrtseries"


let viewProduct: IntProd.ProductInterface[] = []

export const ProductsList = () => {
    const [posts, setPosts]: [IntProd.ProductInterface[], (posts: IntProd.ProductInterface[]) => void] = React.useState(viewProduct)
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true)
    const [error, setError]: [string, (error: string) => void] = React.useState('')

    const [productList, setProductList]: [IntProd.ProductInterface[], (productList: IntProd.ProductInterface[]) => void]  = React.useState(viewProduct)
    const [seach, setSeach] = React.useState([])

    React.useEffect(() => {
        axios.get<IntProd.ProductInterface[]>(baseURL, {headers: { 'Content-Type': 'application/json', }, timeout: 10000, })
            .then((response) => {
                setPosts(response.data);
                setProductList(response.data);
                setLoading(false);
                console.log(response.data)
            })
            .catch((ex) => {
                let error = axios.isCancel(ex)
                    ? 'Request Cancelled'
                    : ex.code === 'ECONNABORTED'
                        ? 'A timeout has occurred'
                        : ex.response.status === 404
                            ? 'Resource Not Found'
                            : 'An unexpected error has occurred';

                setError(error);
                setLoading(false);
            });
    }, []);

    const handleChange = e => {
        setSeach(e.target.value)
        filterSeach(e.target.value)
        console.log("Buscando... "+e.target.value)
    }

    const filterSeach = (seachKeys) => {
        let seachResult = productList.filter((keyElement)=>{
            if(keyElement.name.toString().toLowerCase().includes(seachKeys.toLowerCase())){
                return keyElement
            }
        })
        setPosts(seachResult)
    }
    return (
        <div>
            Products List
            <div>
                <input placeholder="Busqueda por MARCA o NOMBRE de producto"
                value={seach}
                onChange={handleChange}
                />
            </div>
            <div>
                {posts.map(post => (
                    <ul key={post.id}>
                        <img width="200px" src={post.url} alt="" />
                        <h3>{post.name}</h3>
                        <h2>S/ {post.price}</h2>
                        <button>Ver Detalle</button>
                    </ul>
                ))}
            </div>

            <div>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    )
}
