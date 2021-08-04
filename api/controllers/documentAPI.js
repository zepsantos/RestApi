import swaggerUI from 'swagger-ui-express'
import swaggerGen from 'express-swagger-generator'
/* const swaggerExpress = swaggerGen(app);

let options = {
  swaggerDefinition: {
      info: {
          description: 'Reminder API',
          title: 'Reminder',
          version: '1.0.0',
      },
      host: '35.180.83.152:443',
      basePath: '/v1',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
          JWT: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: "",
          }
      }
  },
  basedir: __dirname, //app absolute path */
  //files: ['./routes/**/*.js'] //Path to the API handle folder
/*};
swaggerExpress(options) 
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(null,options)) */