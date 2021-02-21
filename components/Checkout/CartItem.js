import React,{useState} from "react"
import styled from "styled-components"

export default function CartItem({
    imageURL,
    productName,
    color,
    price,
    quantity,
    Productid,
    updateNums,
}){
    const [Quantity,updateQuantity] = useState(quantity)
    let [removed,updateRemoved] = useState(false); 

    function handleChange(e){
        e.preventDefault();
        //let newVal = parseInt(e.target.options[e.target.options.selectedIndex].value)
        let newVal = e.target.value
        console.log(newVal)
        let id = Productid
        updateQuantity(newVal)
        updateNums(newVal,id)
    }

    return(
        <>
            {!removed &&
                <Wrapper>
                    <Container>
                        <Image src={imageURL}/>
                        <Product>
                            <H1>
                                {productName}
                            </H1>
                            <Color>
                                {color}
                            </Color>
                            <Price>
                                ${(price * quantity).toFixed(2)}
                            </Price>
                            <Input type="number" value={Quantity} onChange={(e)=>handleChange(e)} />
                                
                            <Remove onClick={()=>updateRemoved(true)}>
                                Remove
                            </Remove>
                        </Product>
                    </Container>
                </Wrapper>
            }
        </>
    )
}
/*
    let newVal=Quantity
    let id = Productid
    updateNums(newVal,id)
*/

/* 
    <Select value={Quantity} onChange={(e)=>handleChange(e)}>
                                <Option value={1}>
                                    1
                                </Option>
                                <Option value={2}>
                                    2
                                </Option>
                                <Option value={3}>
                                    3
                                </Option>
                                <Option value={4}>
                                    4
                                </Option>
                                <Option value={5}>
                                    5
                                </Option>
                                <Option value={6}>
                                    6
                                </Option>
                                <Option value={7}>
                                    7
                                </Option>
                                <Option value={8}>
                                    8
                                </Option>
                                <Option value={9}>
                                    9
                                </Option>
                                <Option value={10}>
                                    10
                                </Option>
                            </Select>
*/

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
`;

export const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    flex-direction:row;
    border:1px solid #dadcdf;
    padding:20px;
`;

export const Image = styled.img`
    width:250px;
    height:250px;
    margin-right:50px;
`;

export const Product = styled.div`
    width:50%;
`;

export const H1 = styled.h1`
    font-family:Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: #2f3337;
    padding-bottom:15px;
`;

export const Color = styled.div`
    font-family:Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: #2f3337;
    padding-bottom:15px;
`;

export const Price = styled.div`
    font-weight:700;
    font-family:Helvetica,Arial,sans-serif;
    font-size: 20px;
    padding-bottom:15px;
`;
//export const Select = styled.select`
export const Input = styled.input`
    background: transparent!important;
    border: 1px solid #e7e8ea;
    padding-bottom: 1px;
    padding-left: 10px;
    height: 34px;
    width:40%;
    border-radius: 4px;
    margin-bottom:75px;
`;

export const Option = styled.option`
    
`;

export const Remove = styled.div`
    color: #2f3337;
    text-decoration: underline;
    cursor:pointer;
`;