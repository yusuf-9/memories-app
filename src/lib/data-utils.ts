export const getFirstObjectKey = (object: {[key: number] : string}) : number => {
    return parseInt(Object.keys(object)?.[0])
}

export const getLastObjectKey = (object: {[key: number] : string}) : number => {
    const objectKeys = Object.keys(object);
    return parseInt(objectKeys?.[objectKeys?.length - 1])
}

export const wait = async () => new Promise((resolve) => setTimeout(resolve, 1000));