import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// import { ValidationPipe } from "@nestjs/common"
// import {ValidationPipe} from './pipe/validation.pipe'
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import * as cookieParser from 'cookie-parser';

const start = async () =>{
    try {
        const app = await NestFactory.create(AppModule)
        const PORT = process.env.PORT || 3003

        // app.useGlobalPipes(new ValidationPipe());

        const config = new DocumentBuilder()
            .setTitle('NestJS TEST')
            .setDescription('REST API')
            .setVersion('1.0.0')
            .addTag('NodeJS, NestJS, Postgres, sequlize')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/api/docs', app, document);
        app.use(cookieParser());
        app.setGlobalPrefix('api')
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
  
}

start();