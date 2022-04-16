var StringTemplate = /** @class */ (function () {
    function StringTemplate() {
    }
    StringTemplate.prototype.tableCreator = function (personObj) {
        var tableDOM = "<table>\n                                    <th>Name</th>\n                                    <th>Place</th>\n                                    <th>Hobby</th>\n                                    <tr>\n                                        <td>".concat(personObj.getName(), "</td>\n                                        <td>").concat(personObj.getPlace(), "</td>\n                                        <td>").concat(personObj.getHobby(), "</td>\n                                    </tr>\n                                </table>");
        return tableDOM;
    };
    return StringTemplate;
}());
var Person = /** @class */ (function () {
    function Person(name, place, hobby) {
        this.name = name;
        this.place = place;
        this.hobby = hobby;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getPlace = function () {
        return this.place;
    };
    Person.prototype.getHobby = function () {
        return this.hobby;
    };
    return Person;
}());
function STmain() {
    var obj = new Person("siddu", "hyderabad", "playing games");
    var template = new StringTemplate();
    var templatedStr = template.tableCreator(obj);
    console.log(templatedStr);
}
STmain();
