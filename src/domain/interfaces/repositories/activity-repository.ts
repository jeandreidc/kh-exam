import { Activity } from "../../entities/activity";

export interface ActivityRepository {
    createActivity(contact: Activity): void;
    getActivities(): Promise<Activity[]>;
    getActivitiesByUser(userId: number): Promise<Activity[]>;
    findById(id: number): Promise<Activity>;
}