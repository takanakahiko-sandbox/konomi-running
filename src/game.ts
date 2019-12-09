import Konomisan from './konomisan'
import Enemies from './enemies'
import BackGround from './background'

export default class Game {
	private canvas: HTMLCanvasElement
	private ctx: CanvasRenderingContext2D
	private height: number = 500
    private width: number = 1000

    private konomisan: Konomisan
    private enemies: Enemies
    private background:BackGround

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
		this.canvas.width = this.width
		this.canvas.height = this.height
        this.ctx = this.canvas.getContext("2d")
        
        this.konomisan = new Konomisan(100, 0)
        this.enemies = new Enemies()
        this.background = new BackGround()
    }
    
    public update(): void {
        this.konomisan.update(this.width, this.height)
        this.enemies.update()
        this.background.update()
	}

	public draw(): void {
        this.ctx.clearRect(0,0,this.width, this.height)
        this.background.draw(this.ctx)
        this.konomisan.draw(this.ctx)
        this.enemies.draw(this.ctx)
	}
}