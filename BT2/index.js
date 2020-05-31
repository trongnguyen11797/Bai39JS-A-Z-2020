/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');

async function getUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
        console.log('Code1: ');
        console.log(response);
        console.log('Code2: ');
        console.log(response1);
    } catch (error) {
        console.error(error);
    }
}
getUser();

