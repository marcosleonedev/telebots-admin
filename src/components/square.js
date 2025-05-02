import { Handle, Position } from "@xyflow/react"
import { Headphones, Image, Video, File } from "lucide-react"

export function Square(props) {

  return (
    <div className="rounded-xl min-w-[360px] max-w-[360px]">

      <Handle id={props.data.id} type="target" position={Position.Left} style={{ width: 12, height: 12, left: -10, backgroundColor: '#dc2626' }} />

      {
        props.data.message.command && props.data.message.command != '' ? (
          <div className="text-center mb-2 border bg-background border-primary text-primary rounded-xl w-full h-12 flex items-center justify-center relative px-4 text-sm">
            {props.data.message.command}
          </div>
        ) : ''
      }

      {
        props.data.message.delay && isNaN(props.data.message.delay) == false && Number(props.data.message.delay) > 0  ? (
          <div className="text-center mb-2 border bg-background border-primary text-primary rounded-xl w-full h-12 flex items-center justify-center relative px-4 text-sm">
            {props.data.message.delay} segundos de delay
          </div>
        ) : ''
      }

      {
        props.data.message.photo && props.data.message.photo != '' ? (
          <div className="border bg-primary rounded-xl w-full mb-2 h-auto min-h-[240px] flex items-center justify-center">
            <a target="_blank" href={props.data.message.photo}>
              <Image className=" h-24 w-24 text-white" />
            </a>
          </div>
        ) : ''
      }
      {
        props.data.message.video && props.data.message.video != '' ? (
          <div className="border bg-primary rounded-xl w-full mb-2 h-auto min-h-[240px] flex items-center justify-center">
            <a target="_blank" href={props.data.message.video}>
              <Video className=" h-28 w-28 text-white" />
            </a>
          </div>
        ) : ''
      }
      {
        props.data.message.audio && props.data.message.audio != '' ? (
          <div className="border bg-primary rounded-xl w-full mb-2 h-auto min-h-[240px] flex items-center justify-center">
            <a target="_blank" href={props.data.message.audio}>
              <Headphones className=" h-24 w-24 text-white" />
            </a>
          </div>
        ) : ''
      }
      {
        props.data.message.document && props.data.message.document != '' ? (
          <div className="border bg-primary rounded-xl w-full mb-2 h-auto min-h-[240px] flex items-center justify-center">
            <a target="_blank" href={props.data.message.document}>
              <File className=" h-24 w-24 text-white" />
            </a>
          </div>
        ) : ''
      }
      {
        props.data.message.text && props.data.message.text != '' ? (
          <div className="h-auto bg-background border rounded-xl p-4 mb-2 text-wrap">
            <pre className="text-wrap">{props.data.message.text}</pre>
          </div>
        ) : ''
      }

      <div className="grid grid-cols-1 mb-2">
        {
          props.data.message.buttons.map((button, key) => (
            <div
              key={key}
              className="text-center text-white mb-2 bg-primary rounded-xl w-full h-12 flex items-center justify-center relative px-4 text-sm"
            >
              {button[0].text}
              <Handle
                id={button[0].callback_data}
                type="source"
                position={Position.Right}
                style={{
                  width: 12,
                  height: 12,
                  right: -15,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#dc2626'
                }}
              />
            </div>

          ))
        }
      </div>
    </div>
  )
}