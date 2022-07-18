import { Fragment } from "react";
import { item } from "../../Details";

type ResumeProps = {
  data: {
    id: string
    items: item[]
  }
}

export function Resume({ data }: ResumeProps) {
  return (
    <div>
        <p>Número do pedido: {data.id}</p>
        <h3>Resumo da compra:</h3>
        <hr />
      {!!data.items.length && data.items.map((item) => (
        <Fragment key={item.name}>
          <p>{item.qty}x {item.name}</p>
          <p>{item.price}</p>
          <hr />
        </Fragment>
      ))}
    </div>
  )
}