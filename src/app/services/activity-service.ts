import { ActivityRequestModel, ActivityResponseModel } from "../models/activity-model";

export interface ActivityService {
    createActivity(newActivity: ActivityRequestModel): Promise<void>;
    markActivityAsComplete(id: number): Promise<ActivityResponseModel>;

    getAllActivities(sortAscendingByCreation: boolean): Promise<ActivityResponseModel[]>;
    getActivitiesByCompletionStatus(userId: number, isComplete: boolean): Promise<ActivityResponseModel[]>;
    getActivitiesByUser(userId: number): Promise<ActivityResponseModel[]>;
}
