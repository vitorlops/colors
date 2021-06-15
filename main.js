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

const nick_database = {};

let user_id = false;

function new_nick(nick){
    const nick_data = {
        nick: nick
    }

    if(!user_id){
        user_id = firebase.database().ref().child('nicks').push().key;
    }

    let updates = {};
    updates['/nicks/' + user_id] = nick_data;

    let nick_ref = firebase.database().ref();
    nick_ref.update(updates)
        .then(function(){
            return {success: true, message: 'Nick created'};
        })
        .catch(function(){
            return {success: false, message: 'Creation failed'};
        });
}

function remove_nick(){
    if(!user_id) return {success: false, message: 'Invalid nick'};

    let nick_ref = firebase.database().ref('/nicks/' + user_id);
    nick_ref.remove()
        .then(function(){
            return {success: true, message: 'Nick removed'};
        })
        .catch(function(){
            return {success: false, message: 'Remove failed'};
        });
}

nick_database.new = new_nick;
nick_database.remove = remove_nick;

/*logica de pegar o valor do input e mostrar na tela*/
const botao = document.querySelector('#botao');

botao.addEventListener('click', function(){
    const nome = document.querySelector('#nome');

    const input = document.querySelector('#input');
    const inputValue = input.value;
    
    const nomeCenter = nome.innerHTML = inputValue
    nomeCenter.classList.add('.nome')
});