const app=require("./app");
process.env.ENV=String(process.argv.slice(2)[1])

if(process.env.ENV==="dev"){
    console.log("dev env")
    const swaggerJsdoc = require('swagger-jsdoc');
    const swaggerUi = require('swagger-ui-express');
    const swaggerOptions = {
        swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'A sample API for lambda'
        },
        servers: [
            {
            url: 'http://localhost:3500',
            description: 'Development server'
            }
        ]
        },
        apis: ['./controllers/userController.js'] 
    };
    const swaggerDocs=swaggerJsdoc(swaggerOptions);
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));
}

app.listen(3500,()=>{
    console.log("Server on port 3500")
})