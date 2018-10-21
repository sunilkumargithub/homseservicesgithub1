var env = process.env.NODE_ENV||'dev'
console.log('Env:**************',env)
if (env==='dev'){
  process.env.PORT=4000||4000
  process.env.MANGODB_URI='mongodb://localhost:27017/node'
} else if (env==='test'){
  process.env.PORT=4000
  process.env.MANGODB_URI='mongodb://localhost:27017/nodetest'
} else if (env==='prod'){
  process.env.PORT=4000
  process.env.MANGODB_URI='mongodb://localhost:27017/nodeprod'
}
