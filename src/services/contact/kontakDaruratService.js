import request from 'utils/request'

// Contact
const apiGet = async (data) => {
  return request({
    url: '/kontak_darurat',
    auth: false,
    data,
    method: 'get'
  })
}

export {
  apiGet
}
