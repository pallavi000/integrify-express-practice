import { UserRepo } from "../models/user";

// types
import { TUser } from "../types/users";

const usersRepo = new UserRepo();
//business logic should be in services

function findAllUser() {
  return usersRepo.findAllUser();
}

function findSingleUser(userId: number) {
  return usersRepo.findSingleUser(userId);
}

function createUser(user: TUser) {
  return usersRepo.createUser(user);
}

function deleteUser(userId: number) {
  return usersRepo.deleteUser(userId);
}
function updateUserInfo(userId: number, data: TUser) {
  return usersRepo.updateUserInfo(userId, data);
}
function findIndex(userId: number) {
  return usersRepo.findIndex(userId);
}

export default {
  findSingleUser,
  findAllUser,
  createUser,
  deleteUser,
  updateUserInfo,
  findIndex,
};
