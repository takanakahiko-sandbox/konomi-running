import Enemy from './enemy'
import { loadImage } from "./utils"

export default class Enemies {
    public enemiesList: Enemy[]
    private image: HTMLImageElement

    constructor() {
        this.enemiesList = []
        setInterval( () => this.add() , 2000)
        loadImage('randoseru_pink').then(val => {
            this.image = val
        })
    }

    public update(): void {
        this.enemiesList.forEach(e => e.update() )
	}

	public draw(ctx: CanvasRenderingContext2D): void {
        this.enemiesList.forEach(e => e.draw(ctx, this.image) )
    }

    private add(){
        const enemy = new Enemy()
        this.enemiesList.push(enemy)
    }

}