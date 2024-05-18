/*

    Descrição: Tela de Iniciação da aplicação. 

*/

const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready',() =>{

    mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    //resizable: false
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)

});