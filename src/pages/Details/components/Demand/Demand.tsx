import S from './demaind.module.scss'

const STATUS = [
  'Aguardando pagamento',
  'Pagamento aprovado',
  'Confirmação de pagamento',
  'Pedido em separação',
  'Pedido em transporte',
  'Pedido entregue,'
]

type DemandProps = {
  status: string
}

export function Demand({ status }: DemandProps) {
  return (
    <div>
      <h3>Acompanhe seu pedido:</h3>
      <ul>
        {STATUS.map(sts => {
          return status === sts ? <li className={S.active}>{sts}</li> : <li>{sts}</li>
        })}
      </ul>
    </div>
  )
}