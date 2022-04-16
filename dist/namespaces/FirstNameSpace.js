var ActivityDefinition;
(function (ActivityDefinition) {
    var Activity = /** @class */ (function () {
        function Activity(name, type) {
            this.name = name;
            this.type = type;
        }
        Object.defineProperty(Activity.prototype, "activityType", {
            get: function () {
                return this.type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Activity.prototype, "activityName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        return Activity;
    }());
    ActivityDefinition.Activity = Activity;
    var ActivityType;
    (function (ActivityType) {
        ActivityType[ActivityType["PHYSICAL_ACTIVITY"] = 0] = "PHYSICAL_ACTIVITY";
        ActivityType[ActivityType["LOGICAL_ACTIVITY"] = 1] = "LOGICAL_ACTIVITY";
        ActivityType[ActivityType["BEHAVIORAL_ACTIVITY"] = 2] = "BEHAVIORAL_ACTIVITY";
    })(ActivityType || (ActivityType = {}));
})(ActivityDefinition || (ActivityDefinition = {}));
var UserDefinition;
(function (UserDefinition) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        Object.defineProperty(User.prototype, "userName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    UserDefinition.User = User;
})(UserDefinition || (UserDefinition = {}));
var ActivityCreator;
(function (ActivityCreator) {
    var ActivityService = /** @class */ (function () {
        function ActivityService() {
        }
        ActivityService.prototype.addActivityToUser = function (user, activity) {
            throw new Error("Method not implemented.");
        };
        ActivityService.prototype.deleteActivityFromUser = function (user, activity) {
            throw new Error("Method not implemented.");
        };
        return ActivityService;
    }());
})(ActivityCreator || (ActivityCreator = {}));
