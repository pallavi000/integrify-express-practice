import { User } from "../types/users";

export class UserRepo {
    users = [
        {
            id: 1,
            email: "john@mail.com",
            password: "changeme",
            name: "Jhon",
            //role: "customer",
            //: "https://api.lorem.space/image/face?w=640&h=480&r=867"
        },
        {
            id: 2,
            email: "maria@mail.com",
            password: "12345",
            name: "Maria",
            //role: "customer",
            //avatar: "https://i.imgur.com/G45P8tI.jpeg"
        },
        {
            id: 3,
            email: "admin@mail.com",
            password: "admin123",
            name: "Admin",
            //role: "admin",
            //avatar: "https://i.imgur.com/aCDF0yh.jpeg"
        },
        {
            id: 4,
            email: "karya0010mandiri@gmail.com",
            password: "karyamandiri123",
            name: "Anton nurjaman",
            //role: "customer",
            //avatar: "https://api.lorem.space/image/face?w=640&h=480"
        },
        {
            id: 5,
            email: "devcodepsi@gmail.com",
            password: "123456",
            name: "James",
            //role: "customer",
            //avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
        }
    ] 

    findSingleUser(userId: number) {
        const user = this.users.find((user) => user.id === userId);
        return user;
    }

    findAllUser() {
        return this.users;
    }

    createUser(newUser: User) {
        this.users = [...this.users, newUser]
        return newUser;
    }
    deleteUser(userId:number) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex !== -1) 
            this.users.splice(userIndex, 1);
        return userIndex
    }

    updateUserInfo(userIndex: number, data: User) {
        console.log("user index ", userIndex, "Data ", data)
        if (userIndex !== -1) 
            this.users[userIndex] = { ...this.users[userIndex], ...data };
        return this.users[userIndex];
    }

    findIndex(userId:number) {
        return this.users.findIndex(user => user.id === userId);
    }
}