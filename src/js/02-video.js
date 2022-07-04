
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const KEY_OF_TIME = "videoplayer-current-time"


const onPause = function(timeupdate) {
   const timeStingify = JSON.stringify(timeupdate)
    console.log(timeStingify)
    localStorage.setItem(KEY_OF_TIME, timeStingify)
    
};

player.on('pause', onPause);



const currentPause = function(){
    const timeLocal = localStorage.getItem(KEY_OF_TIME)
    const pausedTime = JSON.parse(timeLocal)
    console.log(pausedTime)

    player.setCurrentTime(pausedTime.seconds);
}

currentPause()

player.on('timeupdate', throttle(currentPause, 1000));
