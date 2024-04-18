import { Activity } from "../../domain/entities/activity";

export interface ActivityRequestModel {
    firstName: string;
    lastName: string;
    email: string;
}

export class ActivityResponseModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;

    public static fromDomainModel(activity: Activity) {
        let result = new ActivityResponseModel();

        result.id = activity.id!;
        result.firstName = activity.firstName;
        result.lastName = activity.lastName;
        result.email = activity.email;
        result.createdAt = activity.createdAt;

        return result;
    }
}