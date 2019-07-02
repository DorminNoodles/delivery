document.addEventListener('DOMContentLoaded', event => {

	const app = firebase.app();

	const db = firebase.firestore();
	const myPost = db.collection('posts');

	myPost.get()
		.then(docs => {

			docs.forEach((doc) => {

				console.log(doc.data().title);
				document.write(doc.data().title + '<br>');
			})
			// const data = doc.data();
			// document.write(data.title + '<br>');
			// document.write(data.createdAt);

		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});


})
