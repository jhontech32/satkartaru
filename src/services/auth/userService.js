import request from 'utils/request'
import { apiUser } from 'utils/config'

// User
const apiPost = async (data) => {
  return request({
    url: `${apiUser}`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  apiPost
}
