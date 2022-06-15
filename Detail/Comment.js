class Comment {
    listComment;

    constructor(){

    }

    getAllComment = () => {
        fetch('https://621b8232faa12ee4500f7f7b.mockapi.io/comments')
            .then(response => response.json())
            .then(data => this.listComment = data);
    }
    addComment = (data) => {
        fetch('https://621b8232faa12ee4500f7f7b.mockapi.io/comments', {
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
export default Comment