class Register {
    listUser;

    constructor(){

    }

    getAllUser = () => {
        fetch('https://621b8232faa12ee4500f7f7b.mockapi.io/users')
            .then(response => response.json())
            .then(data => this.listUser = data);
    }
    addUser = (data) => {
        fetch('https://621b8232faa12ee4500f7f7b.mockapi.io/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
}
export default Register