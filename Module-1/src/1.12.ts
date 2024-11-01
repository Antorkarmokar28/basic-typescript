
// nullable type
const searchName = (value: string | null) => {
    if(value){
        console.log('Searching');
    }else{
        console.log('there is nothing to search');
    }
}
// never type
searchName(null);
const throwError = (msg: string): never => {
    throw new Error(msg)
} 
throwError('Erro hogiya')