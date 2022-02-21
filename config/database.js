if(process.env.NODE_ENV == "production"){
   module.exports = {
      mongoUri: "mongodb+srv://tiago:233117@estoque.dxzc7.mongodb.net/produtos?retryWrites=true&w=majority"
   }
}else{
   module.exports = {
      mongoUri: "mongodb://localhost:27017/test"
   }
}