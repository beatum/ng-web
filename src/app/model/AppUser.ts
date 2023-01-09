import { Time } from "@angular/common";

export interface AppUser {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    category: string;
    mail: string;
    creationTime: string | Time;
    status: string;
}