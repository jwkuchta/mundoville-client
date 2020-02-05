// PicUpload and PicUploadNoCrop
export const addPhotoToUser = (user, data) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${localStorage.jwt}`,
        },
        body: data
    })
    .then(resp => resp.text())
    .then(data => {
        window.location.href = "/profile"
    })
    .catch(error => console.log('Error:', error))
}

