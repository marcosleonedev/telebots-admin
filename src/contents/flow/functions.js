export function removeNode(node, nodes, setNodes) {
  if (node.data.message.type != '/start') {
    const newNodes = nodes.filter(obj => obj.id !== node.id);
    setNodes(newNodes)
  }
}

export function removeEdge(edge, edges, setEdges) {
  const newEdges = edges.filter(obj => obj.id !== edge.id)
  setEdges(newEdges)
}

export function onAddNode(
  nodeXPosition,
  setNodeXPosition, 
  setNodes, 
  nodes,
  message
) {

  // Gerando um ID aleatório
  const id = 'card-' + crypto.randomUUID()

  let newXPosition = nodeXPosition + 500

  setNodes(nodes => {

    if (nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      newXPosition = lastNode.position.x + 500;
    } else {
      newXPosition = 100;
    }

    setNodeXPosition(newXPosition)

    return [
      ...nodes,
      {
        id: id,
        type: 'square',
        position: {
          x: newXPosition,
          y: 100
        },
        data: {
          id: id,
          message: message
        }
      }
    ]
  })
}