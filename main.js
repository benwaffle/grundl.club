// Initialize Firebase
var config = {
    apiKey: "AIzaSyCXQXa5S0em7dDCwCF8Jy3sH-7Kebp0aB0",
    authDomain: "grundl-f76fb.firebaseapp.com",
    databaseURL: "https://grundl-f76fb.firebaseio.com",
    storageBucket: "grundl-f76fb.appspot.com",
    messagingSenderId: "756367120577"
};
firebase.initializeApp(config);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const email = this.querySelector('input[name=email]').value
    const password = this.querySelector('input[name=password]').value
    const why = this.querySelector('textarea[name=why]').value

    if (!email || !password || !why) {
        alert('empty field')
        return
    }

    firebase.database().ref('signups').push({
        email,
        password,
        why
    })
    this.style.display = 'none'
})
