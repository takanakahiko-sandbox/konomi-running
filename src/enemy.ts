import gameSetting from './setting'

const height = 50
const width = 50

export default class Enemy {
    private x: number
    private y: number

    private velocityX: number = -10

    constructor() {
        this.y = gameSetting.ground - 50;
        this.x = gameSetting.canvasWidth + width
    }

    public update(): void {
        this.x += this.velocityX
	}

	public draw(ctx: CanvasRenderingContext2D, image: HTMLImageElement): void {
        if(image){
            ctx.drawImage(image, this.x, this.y, width, height);
        }else{
            ctx.fillStyle="red"
            ctx.fillRect(this.x, this.y, width, height)
        }
    }

}