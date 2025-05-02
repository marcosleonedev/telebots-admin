import { Handle, Position } from "@xyflow/react"

export function Button2(props) {
  return (
    <div className="p-5 border rounded-[10px] bg-primary w-[280px] h-10 flex items-center justify-center text-white">
      <Handle style={{ width: '14px', height: '14px' }} id="right2" type="source" position={Position.Right} />
      <Handle style={{ width: '14px', height: '14px' }} id="left2" type="source" position={Position.Left} />
      <p>{props.data.text}</p>
    </div>
  )
}