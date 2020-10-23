console.log('Start');


function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("adesso abbiamo un dato");
        callback ({ userEmail: email });
    }, 1500);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 1000);
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback('titolo del video');
    }, 1000);
}

const user = loginUser("pippo@gmail.com", 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        });
    });
});


console.log('Finish');