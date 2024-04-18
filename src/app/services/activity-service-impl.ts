import { Activity } from "../../domain/entities/activity";
import { ActivityRepository } from "../../domain/interfaces/repositories/activity-repository";
import { ActivityRequestModel, ActivityResponseModel } from "../models/activity-model";
import { ActivityService } from "./activity-service";

export class ActivityServiceImpl implements ActivityService {
    activityRepository: ActivityRepository;
    constructor(activityRepository: ActivityRepository) {
        this.activityRepository = activityRepository;
    }
    markActivityAsComplete(id: number): Promise<ActivityResponseModel> {
        throw new Error("Method not implemented.");
    }
    getActivitiesByCompletionStatus(userId: number, isComplete: boolean): Promise<ActivityResponseModel[]> {
        throw new Error("Method not implemented.");
    }
    getActivitiesByUser(userId: number): Promise<ActivityResponseModel[]> {
        throw new Error("Method not implemented.");
    }

    async createActivity(newActivity: ActivityRequestModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getAllActivities(sortAscendingByCreation: boolean): Promise<ActivityResponseModel[]> {
        return this.activityRepository
            .getActivities()
            .then(activities => activities
                .sort((a, b) => (b.createdAt.getTime() - a.createdAt.getTime()) * (sortAscendingByCreation ? -1 : 1))
                .map(u => ActivityResponseModel.fromDomainModel(u)),
                reason => {
                    throw new Error(reason);
                });
    }

}