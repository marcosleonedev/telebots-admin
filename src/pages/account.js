import { LayoutBase } from '@/components/layout-base'
import { AccountContent } from '@/contents/account'
import axios from 'axios'

export default function AccountPage({ name, email, wiinpayApiKey, pixelAccess, pixelId }) {
  return (
    <LayoutBase>
      <AccountContent name={name} email={email} wiinpayApiKey={wiinpayApiKey} pixelAccess={pixelAccess} pixelId={pixelId}/>
    </LayoutBase>
  )
}

export async function getServerSideProps(context) {
  try {

    const data = await axios.get(`https://api.telebots.com.br/user/list-one`, {
      headers: {
        Authorization: 'Bearer ' + context.req.cookies.token
      }
    })

    return {
      props: {
        name: data.data.data.user.name, 
        email: data.data.data.user.email, 
        wiinpayApiKey: data.data.data.user.wiinpayApiKey, 
        pixelAccess: data.data.data.user.pixelAccess, 
        pixelId: data.data.data.user.pixelId
      }
    }
  } catch (e) {
    return {
      props: {
        name: '',
        email: '',
        wiinpayApiKey: '',
        pixelAccess: '',
        pixelId: ''
      }
    }
  }
}