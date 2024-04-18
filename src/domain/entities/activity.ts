import { UUID } from "mongodb";

export class Activity {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date = new Date();

    private constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public static create(firstName: string, lastName: string, email: string): Activity {
        let user = new Activity(firstName, lastName, email);
        user.id = new UUID().toString();
        return user;
    }
}