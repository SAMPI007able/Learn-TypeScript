export {}
// create addMetadata Decorator function
function addMetaData(target: any){
    return function log(metaData:any){
        metaData.__customMetaData = target;
        return metaData;
    }
}

@addMetaData({'id': 'sampleValue'})
export class Employee {
    constructor( private _emp_code: string, private _emp_name: string ){}

    get emp_code(): string{
        return this._emp_code;
    }
    set emp_code( code: string){
        this._emp_code = code;
    }
    printSalary(){
        console.log( `Employee ${this._emp_name} - ${this.emp_code} - Re. 100000 ` );
    }
} 

function getMetaDataFromTarget(target: any){
    console.log( target.__customMetaData );
}

getMetaDataFromTarget(Employee);


