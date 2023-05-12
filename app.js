async function findMaxInArray(arr) {
    if (arr instanceof Array) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }
    throw new Error("Input data is incorrect");
}

async function callPromise(inputData) {
    try {
        let result = await findMaxInArray(inputData);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

const Run = async () => {
    await console.log('True:');
    await callPromise([3, 4, 5]);
    await console.log('False:');
    await callPromise(1);
}

Run();