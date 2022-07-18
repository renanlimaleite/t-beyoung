import S from './details.module.scss'
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../components/Container/Container';
import { toCurrency } from '../../core/number';
import { Header } from './components/Header/Header';
import { Resume } from './components/Resume/Resume';
import { Demand } from './components/Demand/Demand';
import { Address, Freight, item, UseParamsProps } from './types/details-type';

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
  const { id } = useParams<UseParamsProps>()
  const [data, setData] = useState<dataProps>(INITIAL_STATE)

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
      {/**HEADER COMPONENT */}
      <Header>
        <h1>Olá, {data.name}</h1>
        <Link to="/">
          Sair
        </Link>
      </Header>
      
      {/**RESUME COMPONENT */}
      <Resume data={data} />

      <div className={S.grid}>
        <div>
          <h3>Prazo de entrega</h3>
          <p>de {data.freight.from} a {data.freight.to} dias</p>
          <p>Frete: {toCurrency(data.freight.price)}</p>
          <p>Total: {toCurrency(data.total)}</p>
        </div>

        {/**DEMAND COMPONENT */}
        <Demand status={data.status} />

      </div>

    <div className={S.grid}>
      <div>
        <h3>Entregar em:</h3>
        <p>{data.address.street}, {data.address.number}</p>
        <p>{data.address.city} - {data.address.state} - {data.address.postcode}</p>
      </div>
      
      <div>
        <h3>Forma de pagamento</h3>
        {data.payment_method}
      </div>
    </div>

    </Container>
  );
}
