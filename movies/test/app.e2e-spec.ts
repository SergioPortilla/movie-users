import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MoviePostgresRepository } from '../src/infrastructure/adapter/movie.postgres.repository';
import { Repository } from 'typeorm';
import { MovieEntity } from '../src/infrastructure/adapter/entity/movie.entity';
import { Movie } from '../src/domain/model/movie';
import { GenericContainer, StartedTestContainer } from 'testcontainers';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let container: StartedTestContainer;

  const DATABASE_PORT = 5433;
  const DATABASE_NAME = 'test';
  const DATABASE_PASSWORD = 'root';

  // const repo = new Repository<MovieEntity>();
  // const movies = new MoviePostgresRepository(repo);
  // let movie = new Movie(4, "El Exorcista", "El exorcismo mas impactante jamas documentado");
  beforeAll(async () => {
    const container = await new GenericContainer("postgres")
      .withEnv('MYSQL_ROOT_PASSWORD', DATABASE_PASSWORD)
      .withEnv('MYSQL_DATABASE', DATABASE_NAME)
        //     .withExposedPorts(DATABASE_PORT)
        //     .withWaitStrategy(Wait.forLogMessage('port: 3306'))
        //     .start();
    .withExposedPorts(5433)
    .start();

    const databaseConnection = {
      port: container.getMappedPort(5433),
      host: 'localhost',
      username: 'root'
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule.forRoot(databaseConnection)],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule],
  //   }).compile();

  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('[]');
  });
});
