// import { MovieController } from '../src/infrastructure/adapter/controller/movie.controller';
// import { SearchMovieService } from '../src/application/caseuse/SearchMovie.service';
// import { UpdateUserService } from '../src/application/caseuse/messages.service';
// import { MovieRepository } from '../src/domain/ports/movie.repository';
// import { RabbitMqConnection } from '../src/infrastructure/middleware/rabbitMq.connection';
// import { CreateMovieService } from '../src/application/caseuse/createMovie.service';
// import { Movie } from 'src/domain/model/movie';

// describe('CatsController', () => {
//   let catsController: MovieController;
//   let searchMovieService: SearchMovieService;
//   let createMovieService: CreateMovieService;
//   let updateUserService: UpdateUserService;
//   let movieRepository: MovieRepository;
//   let rabbitMqConnection: RabbitMqConnection;

//   beforeEach(() => {
//     searchMovieService = new SearchMovieService(movieRepository);
//     createMovieService = new CreateMovieService(movieRepository, updateUserService);
//     catsController = new MovieController(createMovieService, searchMovieService);
//   });

//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const algo: Movie = new Movie(324, "UJJUUJ", "synopsis");
//       const algo2: Movie = new Movie(324, "UJJUUJ", "synopsis");
//       let algos: Movie[];
//       algos.push(algo);
//       algos.push(algo2);
    
//       let result;
//       jest.spyOn(searchMovieService, 'findById').mockImplementation(() => result);

//       expect(await catsController.findById(324)).toBe(result);
//     });
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import  * as request  from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { StartedTestContainer, GenericContainer, Wait } from 'testcontainers';

describe('Rent (e2e)', () => {
    let app: INestApplication;
    let container: StartedTestContainer;
    const DATABASE_PORT = 5433;
    const DATABASE_NAME = 'test';
    const DATABASE_PASSWORD = 'true';
    jest.setTimeout(60000);
    const base_user = {
        name: "test",
        email: "test@test.com",
        password: "password",
        address: "test",
        dni: "123456789",
        phone: "1234567",
        rol: "usuario"
    };

    beforeAll(async () => {
      const container = await new GenericContainer("postgres")
        .withExposedPorts(5432)
        .start();
        // container = await new GenericContainer('mysql')
        //     .withEnv('MYSQL_ROOT_PASSWORD', DATABASE_PASSWORD)
        //     .withEnv('MYSQL_DATABASE', DATABASE_NAME)
        //     .withExposedPorts(DATABASE_PORT)
        //     .withWaitStrategy(Wait.forLogMessage('port: 3306'))
        //     .start();

        const databaseConnection = {
            port: container.getMappedPort(DATABASE_PORT),
            host: 'localhost',
            username: 'root'
        };

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule.forRoot(databaseConnection)],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await container.stop();
    });

    describe('/:id (GET)', () => {
        it('/:id', async () => {
            let user = { ...base_user }
            const { status, body } = await request(app.getHttpServer())
                .get('/1');
            expect(status).toEqual(HttpStatus.OK);
            expect(typeof body).toBe('object');
            user['id'] = body.id;
            expect(user).toMatchObject(body);
        })
    })
});