
export const EditAndValidate = (obj, array) => {
    let result = {};
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (obj[element] && obj[element] !== '' && !obj[element].length) {
            result[element] = obj[element];
        }
        if (obj[element] && obj[element].length > 0) {
            result[element] = obj[element];
        }
    }
    return result;
};
export const  create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

;