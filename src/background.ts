import { loadImage } from "./utils";
import gameSetting from './setting'

class ScrolImage {
    private x: number
    private image: HTMLImageElement

    constructor(
        imgName: string,
        private velocity: number,
        private top: number,
        private height:number,
        private width:number,
        private interval:number,
    ){
        this.x = this.velocity
        loadImage(imgName).then(val => {
            this.image = val
        })
    }

    public update() {
        this.x += this.velocity
        if( this.x < -this.width) this.x=this.velocity
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const numberOfImg = Math.floor(gameSetting.canvasWidth/this.interval) + 2
        for(let i=0; i<numberOfImg;i++){
            ctx.drawImage(this.image, this.x+this.interval*i, this.top, this.width, this.height)
        }
    }

}

export default class BackGround {
    private ground: ScrolImage

    constructor() {
        const top = gameSetting.canvasHeight-100
        const width = gameSetting.canvasWidth
        this.ground = new ScrolImage('gra_ground_grassA', -10, top, 100, width, width)
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