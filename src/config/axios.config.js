const isProd = process.env.NODE_ENV === 'production'

let BASE_URL
let IMAGE_PREFIX
if (isProd) {
  BASE_URL = 'http://106.54.82.67:8081/api/web' // 生产地址
  IMAGE_PREFIX = 'http://106.54.82.67' // 生产地址
} else {
  BASE_URL = 'http://localhost:8080/api/web'
  // IMAGE_PREFIX = 'http://localhost:8080'
  IMAGE_PREFIX = 'http://106.54.82.67' // 生产地址
}

export {
  BASE_URL,
  IMAGE_PREFIX
}
