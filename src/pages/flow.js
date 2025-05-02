import { LayoutBase } from '@/components/layout-base'
import { FlowContent } from '@/contents/flow'
import axios from 'axios'

export default function FlowPage({ id, name, nodes, edges }) {
  return (
    <LayoutBase>
      <FlowContent id={id} name={name} initialNodes={nodes} initialEdges={edges} />
    </LayoutBase>
  )
}

export async function getServerSideProps(context) {

  try {

    const data = await axios.get(`https://api.telebots.com.br/flow/list-admin/${context.query.id}`, {
      headers: {
        Authorization: 'Bearer ' + context.req.cookies.token
      }
    })

    return {
      props: {
        id: context.query.id,
        name: data.data.data.flow.name,
        nodes: data.data.data.flow.nodes,
        edges: data.data.data.flow.edges
      }
    }
  } catch (e) {
    console.log(e.message)
    return {
      props: {
        id: '',
        name: '',
        nodes: [],
        edges: []
      }
    }
  }
}