'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  //默认访问的url，网址的前缀；后端我们用网关实现请求转发
  BASE_API: '"http://localhost:8222"',
  // BASE_API: '"http://localhost:9001"',
})
