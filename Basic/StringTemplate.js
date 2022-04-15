class StringTemplate {
    tableCreator(personObj) {
        var tableDOM = `<table>
                                    <th>Name</th>
                                    <th>Place</th>
                                    <th>Hobby</th>
                                    <tr>
                                        <td>${personObj.getName()}</td>
                                        <td>${personObj.getPlace()}</td>
                                        <td>${personObj.getHobby()}</td>
                                    </tr>
                                </table>`;
        return tableDOM;
    }
}
class Person {
    constructor(name, place, hobby) {
        this.name = name;
        this.place = place;
        this.hobby = hobby;
    }
    getName() {
        return this.name;
    }
    getPlace() {
        return this.place;
    }
    getHobby() {
        return this.hobby;
    }
}
function STmain() {
    var obj = new Person("siddu", "hyderabad", "playing games");
    var template = new StringTemplate();
    var templatedStr = template.tableCreator(obj);
    console.log(templatedStr);
}
STmain();
