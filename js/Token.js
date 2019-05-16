class Token{
  constructor(owner, color , dropped = false){
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = dropped;
    this.color = color;
    
  }
}