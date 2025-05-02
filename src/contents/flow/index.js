import { Layout } from "@/components/layout"
import { addEdge, Background, ConnectionMode, MiniMap, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react"
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from "react"
import { Square } from "@/components/square";
import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner"

export function FlowContent({ id, name, initialNodes, initialEdges }) {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [displayMinimap, setDisplayMinimap] = useState(false)

  return (
    <Layout titulo={name} className={'p-0'}>
      <div className='h-[calc(100svh-56px)] w-full relative'>
        <ReactFlow
          maxZoom={2}
          minZoom={0.1}
          nodeTypes={{ square: Square }}
          nodes={nodes}
          onNodesChange={onNodesChange}
          connectionMode={ConnectionMode.Loose}
          edges={edges}
          defaultEdgeOptions={{ animated: true }}
        >
          <Background gap={40} size={2} />
          {
            displayMinimap == true ? (
              <MiniMap
                style={{
                  backgroundColor: '#dc2626'
                }}
                nodeColor={'#FFF'}
              />
            ) : ''
          }

        </ReactFlow>
      </div>

      <Toaster />

      <div className='w-full flex flex-col items-center justify-center absolute left-0  bottom-5'>

        <div className="w-full flex items-center justify-center">
          <Button onClick={() => {
            displayMinimap == false ? setDisplayMinimap(true) : setDisplayMinimap(false)
          }} className={'mr-2.5'}>
            <Map className="" />
          </Button>
        </div>
      </div>
    </Layout>
  )
}
