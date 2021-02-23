

export const recuired = (value) => {
    if (value)return undefined;
    return "Error";

}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght ) return `Max lenght is ${maxLenght}`;
    return undefined;

}