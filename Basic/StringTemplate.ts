class StringTemplate{
    public tableCreator(personObj: Person): string{
        var tableDOM: string = `<table>
                                    <th>Name</th>
                                    <th>Place</th>
                                    <th>Hobby</th>
                                    <tr>
                                        <td>${personObj.getName()}</td>
                                        <td>${personObj.getPlace()}</td>
                                        <td>${personObj.getHobby()}</td>
                                    </tr>
                                </table>`
        return tableDOM;
    }
}


class Person{
    private name:string;
    private place:string;
    private hobby:string;

    constructor(name: string,place: string, hobby: string){
        this.name=name;
        this.place=place;
        this.hobby=hobby;
    }

    public getName():string{
        return this.name;
    }

    public getPlace():string{
        return this.place;
    }

    public getHobby():string{
        return this.hobby;
    }
}


function STmain(){
    var obj:Person = new Person("siddu","hyderabad","playing games");
    var template:StringTemplate = new StringTemplate();
    var templatedStr:string = template.tableCreator(obj);
    console.log(templatedStr);
}

STmain();