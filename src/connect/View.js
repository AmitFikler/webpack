import Event from "./Events";

class View {
  constructor() {
    this.board = document.getElementById('board');
    this.slotClickEvent = new Event();
  }

  render() {
    for (let x = 1; x < 8; x++) {
      for (let y = 1; y < 8; y++) {
        const disk = document.createElement('div');
        disk.classList.add('disk', `disk-${x}-${y}`);
        disk.style.gridColumn = `${9 - y} / span 1`;
        disk.style.gridRow = `${9 - x} / span 1`;
        disk.addEventListener('click', () => {
          this.slotClickEvent.trigger(x, y);
        });
      }
    }
  }
}

export default View;
