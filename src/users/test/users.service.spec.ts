import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.model';
import { getModelToken } from '@nestjs/sequelize';
import { userStub } from './stubs/user.stub';
import { CreateUserDto } from '../dto/create-user.dto';

describe('Users service', () => {
  let usersService: UsersService;
  const mockUsersRepository = {
    create: jest.fn().mockImplementation(userStub),
    findOne: jest.fn().mockImplementation(userStub),
    findByPk: jest.fn().mockImplementation(userStub),
    findAll: jest.fn().mockImplementation(() => [userStub()]),
    destroy: jest.fn().mockImplementation(() => 1),
    activateUser: jest.fn().mockImplementation(userStub),
    deactivateUser: jest.fn().mockImplementation(userStub),
    $add: jest.fn().mockImplementation(userStub),
  };

  const mockRolesRepository = {
    findOne: jest.fn().mockImplementation((value) => 'ADMIN'),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        {
          provide: getModelToken(User),
          useValue: mockUsersRepository,
        }
      ],
    }).compile();
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('Create User', () => {
    describe('When createUser is called', () => {
      let createUserDto: CreateUserDto;
      let newUser: User;
      beforeEach(async () => {
        createUserDto = {
        };
        newUser = await usersService.createUser(createUserDto);
      });

      it('should be create new user', async () => {
        expect(await usersService.createUser(createUserDto)).toEqual({
          ...userStub(),
          roles: ['ADMIN'],
        });
      });
    });
  });

  describe('getOneUser', () => {
    describe('when getOneUser is called', () => {
      test('then it should call userService', async () => {
        expect(await usersService.getUserById(userStub().id)).toEqual(
          userStub(),
        );
      });
    });
  });

  describe('getAllUsers', () => {
    describe('when getAllUsers is called', () => {
      test('then it should call usersService', async () => {
        expect(await usersService.getAllUsers()).toEqual([userStub()]);
      });
    });
  });

  describe('deleteUser', () => {
    describe('when deleteUser is called', () => {
      test('then it should call usersService', async () => {
        expect(await usersService.deleteUser(userStub().id)).toEqual(1);
      });
    });
  });

  describe('activateUser', () => {
    describe('when activateUser is called', () => {
      test('then it should call usersService', async () => {
        expect(
          await usersService.activateUser({ userId: userStub().id }),
        ).toEqual({ ...userStub(), is_active: true });
      });
    });
  });

  describe('deactivateUser', () => {
    describe('when deactivateUser is called', () => {
      test('then it should call usersService', async () => {
        expect(
          await usersService.deactivateUser({ userId: userStub().id }),
        ).toEqual({ ...userStub(), is_active: false });
      });
    });
  });

  // describe('addRole', () => {
  //   describe('when addRole is called', () => {
  //     test('then it should call usersService', async () => {
  //       expect(
  //         await usersService.addRole({ value: 'ADMIN', userId: userStub().id }),
  //       ).toEqual({
  //         ...userStub(),
  //         roles: [...userStub().roles, 'USER'],
  //       });
  //     });
  //   });
  // });
});
