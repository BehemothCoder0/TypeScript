namespace ActivityDefinition{
   export class Activity{
        constructor(private name:string,private type:ActivityType){

        }

        get activityType(){
            return this.type;
        }

        get activityName(){
            return this.name;
        }
    }


    enum ActivityType{
        PHYSICAL_ACTIVITY,
        LOGICAL_ACTIVITY,
        BEHAVIORAL_ACTIVITY
    }
}

namespace UserDefinition{
   export class User{
        constructor(private name:string){

        }

        get userName(){
            return this.name;
        }
    }
}

namespace ActivityCreator{
    import activityDef = ActivityDefinition;
    import userDef = UserDefinition;
    import Activity = activityDef.Activity;
    import User = userDef.User;
    interface IActivityService{
        addActivityToUser(user:User, activity:Activity):number;
        deleteActivityFromUser(user:User,activity:Activity):void;
    }

    class ActivityService implements IActivityService{
        addActivityToUser(user: User, activity: Activity): number {
            throw new Error("Method not implemented.");
        }
        deleteActivityFromUser(user: User, activity: Activity): void {
            throw new Error("Method not implemented.");
        }
        
    }
}

