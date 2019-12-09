import { loadImage } from "./utils";
import gameSetting from './setting'

class ScrolImage {
    private x: number
    private image: HTMLImageElement

    constructor(
        imgName: string,
        private velocity: number,
        private top: number,
        private height:number
    ){
        this.x = 0
        loadImage(imgName).then(val => {
            this.image = val
        })
    }

    public update() {
        this.x += this.velocity
        if( this.x < -gameSetting.canvasWidth) this.x=-1
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image,this.x, this.top, gameSetting.canvasWidth, this.height)
        ctx.drawImage(this.image,this.x+gameSetting.canvasWidth, this.top, gameSetting.canvasWidth, this.height)
    }

}

export default class BackGround {
    private ground: ScrolImage

    constructor() {
        const top = gameSetting.canvasHeight-100
        this.ground = new ScrolImage('gra_ground_grassA', -10, top, 100)
    }

    public update() {
        this.ground.update()
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#A0D0FF"
        ctx.fillRect(0,0,gameSetting.canvasWidth,gameSetting.canvasHeight)
        this.ground.draw(ctx)
    }
}