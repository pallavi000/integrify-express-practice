import { UserRepo } from "../models/User"
import { User } from "../types/users"

const usersRepo = new UserRepo()
//business logic should be in services

function findAllUser() {
    const users = usersRepo.findAllUser();
    return users;
}

function findSingleUser(userId: number) {
    const user = usersRepo.findSingleUser(userId);
    return user;
}

function createUser(user: User) {
    const newUser = usersRepo.createUser(user);
    return newUser;
}

function deleteUser(userId: number) {
    const userIndex = usersRepo.deleteUser(userId);
    return userIndex;
}
function updateUserInfo(userIndex:number, data: User) {
    const userData = usersRepo.updateUserInfo(userIndex, data);
    return userData;
}
function findIndex(userId:number) {
    const userIndex = usersRepo.findIndex(userId);
    return userIndex;
}

export default {
    findSingleUser,
    findAllUser,
    createUser,
    deleteUser,
    updateUserInfo,
    findIndex
}