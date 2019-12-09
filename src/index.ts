import Game from './game'

class App {
	private _game: Game

	constructor(game: Game) {
		this._game = game
	}

	public setup(): void {
		this.gameLoop()
	}

	private gameLoop(): void {
        requestAnimationFrame(this.gameLoop.bind(this)) 
        this._game.update()
		this._game.draw()
	}
}

window.onload = () => {
	let app = new App(new Game())
	app.setup()
}
