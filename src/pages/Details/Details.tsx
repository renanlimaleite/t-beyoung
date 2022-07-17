import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Container } from '../../components/Container/Container';

type ParamsProps = {
  id: string
}

export function Details() {
  const { id } = useParams<ParamsProps>()

  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/${id}.json`);
    const data = await response.json()
    console.log(data)
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return (
    <Container>
      <h1>Details</h1>
    </Container>
  );
}
