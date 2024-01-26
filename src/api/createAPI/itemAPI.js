import createApi from "./createAPI";

const itemAPI = {
    getAllItems: createApi({
        url:'https://jsonplaceholder.typicode.com/todos',
        method:'GET'
    })
}

export default itemAPI