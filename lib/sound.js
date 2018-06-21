
class Sounds {
  constructor(src){
    this.sound = new Audio(src);
    this.sound.loop = true;
    this.sound.volume = 0.25;
    this.sound.load();
  }
}

export default Sounds;
