import React from 'react'

/*
"price": 1490,
    "discount": 20,
    "category": 
    
<button className="btn btn-primary">Go somewhere</button>
*/

export default function Card(){
    return(
        <>
            <div className="card" style={{width: "10rem"}}>
                <img className="card-img-top" src="https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg" alt="Card"/>
                    <div className="card-body">
                        <h6 className="card-title">{`ENERGETICA MR BIG`}</h6>
                        <p className="card-text">{`Precio: 1490`}</p>
                        <p className="card-text">{`Categoria: 1`}</p>
                    </div>
            </div>
        </>
    )
}