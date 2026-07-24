import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className="container">
    <h1 className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quisquam consectetur reiciendis numquam autem ducimus totam modi natus reprehenderit dolorem omnis repellendus a saepe aliquid nulla, adipisci, quibusdam perferendis!</h1>
  </div>
  )
}
