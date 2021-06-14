/*firebase*/
()=>{
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
    firebase.analytics();
    firebase.database();
}

/*logica de pegar o valor do input e mostrar na tela*/
const botao = document.querySelector('#botao');

botao.addEventListener('click', function(){
    const nome = document.querySelector('#nome');

    const input = document.querySelector('#input');
    const inputValue = input.value;
    
    const nomeCenter = nome.innerHTML = inputValue
    nomeCenter.classList.add('.nome')
});