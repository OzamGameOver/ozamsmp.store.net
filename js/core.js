window.onload = function () {

    // GENERAL CONFIGS v0.1

    //Site title
    let title = '';

    //Server Ip (counter)
    var serverIp = 'ozamsmp.servertux.eu';
    var serverIpPort = 25569;

    //Banner image (url) 
    var bannerTop = 'https://i.postimg.cc/hjkMskHx/9kin-Xy3Qbbc-HD-PNG.jpg';

    //--------------- Home Gallery ---------------
    //Firs text / image (url)
    var text_Gfirst = 'Special Items';
    var image_Gfirst = 'https://i.postimg.cc/4d2nTZJp/Emerald-Tools-Thumbnail-0.jpg';
    //Second text / image (url)
    var text_Gsecond = 'Economy'
    var image_Gsecond = 'https://i.postimg.cc/fW0MbY5h/68747470733a2f2f692e706f7374696d672e63632f467a5971314344432f7265616c69737469632d65636f6e6f6d792e706e.png';
    //Third text / image (url)
    var text_Gtrird = 'Great Community'
    var image_Gtrird = 'https://i.postimg.cc/qMPhRk2j/CM-You-Tube-Thumbnail.jpg';
    //--------------------------------------------

    //Type Server (FullPVP, MiniGame, Survival, and others...)
    var typeServer = 'Full PVP';

    //--------------- Home Gallery ---------------
    // Image automatically changes according to the name :)
    //Firs player nick / comment text
    var firstPlayerName = 'ozam2games';
    var firstPlayerComment = "The best server, great fun and the team helps whenever I need it!";
    //Second player nick / comment text
    var secondPlayerName = 'Tester';
    var secondPlayerComment = "Fun, cute and cool. All my friends are playing here and let's make a clan, best server ever";
    //Third player nick / comment text
    var trirdPlayerName = 'Notch';
    var trirdtPlayerComment = "I will defeat them all, wait for me!";
    //--------------------------------------------

    //Social media links / banner (url)
    var urlFacebook = "https://github.com/ozamgameover";
    var urlTwiiter = "https://github.com/ozamgameover";
    var urlInstagram = "https://www.instagram.com/ozam2games/";
    var urlYoutube = "https://www.youtube.com/@OzamGameOver";
    var discordInvite = "https://discord.com/4dRweu47BF";
    var bannerSocialImage = "https://i.imgur.com/oSbKvAT.png";


    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------

    try {

        document.getElementById('serverIpText').innerHTML = serverIp;
        document.getElementById('title').innerHTML = title;
        document.getElementById('bannerTop').style.backgroundImage = "url(" + bannerTop + ")";
        document.getElementById('image_Gfirst').style.backgroundImage = "url(" + image_Gfirst + ")";
        document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
        document.getElementById('image_Gsecond').style.backgroundImage = "url(" + image_Gsecond + ")";
        document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
        document.getElementById('image_Gtrird').style.backgroundImage = "url(" + image_Gtrird + ")";
        document.getElementById('text_Gtrird').innerHTML = text_Gtrird;
        document.getElementById('typeServer').innerHTML = typeServer;
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
        document.getElementById('trirdPlayerName').innerHTML = trirdPlayerName;
        document.getElementById('firstPlayerImage').src = "https://cravatar.eu/helmavatar/" + firstPlayerName + "/190.png";
        document.getElementById('secondPlayerImage').src = "https://cravatar.eu/helmavatar/" + secondPlayerName + "/190.png";
        document.getElementById('trirdPlayerImage').src = "https://cravatar.eu/helmavatar/" + trirdPlayerName + "/190.png";
        document.getElementById('firstPlayerComment').innerHTML = firstPlayerComment;
        document.getElementById('secondPlayerComment').innerHTML = secondPlayerComment;
        document.getElementById('trirdtPlayerComment').innerHTML = trirdtPlayerComment;
        document.getElementById('urlFacebook').href = urlFacebook;
        document.getElementById('urlTwiiter').href = urlTwiiter;
        document.getElementById('urlInstagram').href = urlInstagram;
        document.getElementById('urlYoutube').href = urlYoutube;
        document.getElementById('discordInvite').href = discordInvite;
        document.getElementById('bannerSocialImage').style.backgroundImage = "url(" + bannerSocialImage + ")";

    } catch (e) {


    }


    MinecraftAPI.getServerStatus(serverIp, {
        port: serverIpPort // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        document.getElementById('serverStatus').innerHTML = status.online ? 'Online' : 'Offline';
        document.getElementById('playersOn').innerHTML = status.players.now;
        document.getElementById('playersMax').innerHTML = status.players.max;
    });

    setTimeout(() => {
        var status = document.getElementById('serverStatus');
        if (status.textContent == 'Online') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);

}

function copyIp() {
    let ip = document.getElementById('serverIpText').innerHTML;
    navigator.clipboard.writeText(ip);
}
