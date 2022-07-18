import S from './resume.module.scss'

import { Fragment } from "react";
import { toCurrency } from "../../../../core/number";
import { item } from "../../Details";

type ResumeProps = {
  data: {
    id: string
    items: item[]
  }
}

export function Resume({ data }: ResumeProps) {
  return (
    <div className={S.resume}>
        <h3>Resumo da compra - Número do pedido: <i>{data.id}</i></h3>
        <hr />
      {!!data.items.length && data.items.map((item) => (
        <Fragment key={item.name}>
          <p>{item.qty}x {item.name}</p>
          <p>{toCurrency(item.price)}</p>
          <hr />
        </Fragment>
      ))}
    </div>
  )
}