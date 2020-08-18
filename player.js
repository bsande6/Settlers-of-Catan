class Player {
  constructor(color) {
      //this.p_number = p_number;
      this.color = color;
      this.vicPoints = 0;
      this.longestRoad = false;
      this.largestArmy = false;
      this.hexList = new Array();
      this.resources = {
        brick: 0,
        wood: 0,
        sheep: 0,
        wheat: 0,
        ore: 0
      };
      //this.playerRoads = new Array();
      this.roadMap = new BoardGraph();
      this.settlements = new Array();
      this.settlementsMap = new Array();
      this.devCards = new Array();
      this.ports = new Array();
      this.totalResources = this.resources.brick + this.resources.wood + this.resources.ore +
                            this.resources.wheat + this.resources.sheep;
  }


  updateResources(resource, val) {
    console.log(resource);
    console.log(this.resources[resource]);
    this.resources[resource] = this.resources[resource] + val;
    this.totalResources = this.resources.brick + this.resources.wood + this.resources.ore +
                          this.resources.wheat + this.resources.sheep;
    console.log(this.resources[resource]);
  }
}
