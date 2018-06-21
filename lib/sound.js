
class Sounds {
  constructor(){
    this.sound = document.getElementById('audio');
    this.sound.style.display = "none";
  }

  play(){
    this.sound.play();
  }

  stop(){
    this.sound.pause();
  }
}

export default Sounds;
