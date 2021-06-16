/*firebase*/
var firebaseConfig = {
    apiKey: "AIzaSyBbQHNW2Ycs1zSreLf82c5MEm6WJ_v2FsQ",
    authDomain: "colors-vito7.firebaseapp.com",
    databaseURL: "https://colors-vito7-default-rtdb.firebaseio.com",
    projectId: "colors-vito7",
    storageBucket: "colors-vito7.appspot.com",
    messagingSenderId: "372799977703",
    appId: "1:372799977703:web:062afbe6cc1f6144c00a42",
    measurementId: "G-8VP0NF2TXQ"
};
firebase.initializeApp(firebaseConfig);

/*logica de pegar o valor do input,mandar para o bando de dados e mostrar na tela*/
const botao = document.querySelector('#botao');
const input = document.querySelector('#input');
const nicksContent = document.querySelector('.nicks');

botao.addEventListener('click', function(){
    create(input.value);
});

function create(nick){
    const nick_data = {
        nick: nick
    }

    return firebase.database().ref().child('nicks').push(nick_data);
}

firebase.database().ref('nicks').on('value', function(snapshot){
    nicksContent.innerHTML = '';
    snapshot.forEach(function(item){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nick));
        nicksContent.appendChild(li);
    })
})