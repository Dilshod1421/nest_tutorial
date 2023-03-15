import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('User service', () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'gani@gmail.com',
        password: 'Uzbek!$t0n',
      });
    console.log(response.body);
    token = response.body.TOKEN;
    console.log(token);
  });

  it('/users (GET) --> 200 OK', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

// import { INestApplication, ValidationPipe } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { AppModule } from '../src/app.module';
// import * as request from 'supertest';

// describe('UserController (e2e)', () => {
//   let app: INestApplication;
//   let token: string;

//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     app.useGlobalPipes(new ValidationPipe());
//     await app.init();

//     const response = await request(app.getHttpServer())
//       .post('/auth/login')
//       .send({
//         email: 'gani@gmail.com',
//         password: 'Uzbek!$t0n',
//       });
//     token = response.body.token;
//     console.log(token);
//   });
//   it('/users (GET) --> 200 OK', () => {
//     return request(app.getHttpServer())
//       .get('/users')
//       .set('Authorization', `Bearer ${token}`)
//       .expect('Content-Type', /json/)
//       .expect(200);
//   });
// });
