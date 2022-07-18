import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container/Container';
import { Header } from './components/Header/Header';
import { Resume } from './components/Resume/Resume';

type Address = {
  city: string
  number: number
  postcode: string
  state: string
  street: string
}

type ParamsProps = {  
  id: string
}

export type item = {
  name: string
  price: string
  qty: number
}

type Freight = {
  from: number
  to: number
  price: string
}

export type dataProps = {
  address: Address
  name: string
  id: string
  items: item[]
  total: string
  payment_method: string
  status: string
  freight: Freight
}

const INITIAL_STATE = {
  address: {
    city: '',
    number: 0,
    postcode: '',
    state: '',
    street: ''
  },
  name: '',
  id: '',
  items: [],
  total: '',
  payment_method: '',
  status: '',
  freight: {
    from: 0,
    to: 0,
    price: ''
  }
}


export function Details() {
  const { id } = useParams<ParamsProps>()
  const [data, setData] = useState<dataProps>(INITIAL_STATE)
  console.log({ data })

  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/${id}.json`);
    const data: dataProps = await response.json()
    setData(data)
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <Container> 
      <Header>
        <h1>Olá, {data.name}</h1>
      </Header>      
      <Resume data={data} />
      <div>
        <h3>Prazo de entrega</h3>
        <p>de {data.freight.from} a {data.freight.to} dias</p>
        <p>Frete: {data.freight.price}</p>
        <p>Total: {data.total}</p>
      </div>
      <div>
        <h3>Acompanhe seu pedido</h3>
        {data.status}
      </div>
      <div>
        <h3>Entregar em:</h3>
        <p>{data.address.street}, {data.address.number}</p>
        <p>{data.address.city} - {data.address.state} - {data.address.postcode}</p>
      </div>
      <div>
        <h3>Forma de pagamento</h3>
        {data.payment_method}
      </div>
    </Container>
  );
}
