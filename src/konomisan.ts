import { loadImage } from "./utils";
import gameSetting from './setting'

const gravityAccel: number = 1.5
const height = 96
const width = 80

export default class Konomisan {
    private x: number
    private y: number

    private velocityX: number = 0
    private velocityY: number = 0

    private image: HTMLImageElement
    private image2: HTMLImageElement
    private image3: HTMLImageElement

    private counter: number;
    
    constructor(x: number, y:number) {
        this.x = x
        this.y = y
        addEventListener("keydown", () => this.jump() )
        loadImage('konomi').then(val => {
            this.image = val
        })
        loadImage('tewi_material01').then(val => {
            this.image2 = val
        })
        loadImage('tewi_material03').then(val => {
            this.image3 = val
        })
        this.counter = 0;
    }
    
    public update(canvasWidth: number, canvasHeight: number,): void {
        this.velocityY += gravityAccel
        this.x += this.velocityX
        this.y += this.velocityY

        this.y = Math.min(this.y, gameSetting.ground-height)
        if(this.y==gameSetting.ground-height){
            this.velocityY = 0;
        }
        this.counter++
	}

	public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle="red"
        if(this.image){
            //ctx.drawImage(this.image, this.x, this.y, width, height);
            if(this.y==gameSetting.ground-height){
                let frame = Math.floor(this.counter/4)%6 + 2
                frame = Math.floor(frame/2)*2 + 1
                this.drawFlame(ctx, this.image3, frame, 0)
            }else{
                let frame = Math.floor((this.velocityY+30)/6)
                frame = Math.floor(frame/3)*3
                this.drawFlame(ctx, this.image2, frame, 3)
            }
        }else{
            ctx.fillRect(this.x, this.y, width, height)
        }
        
    }

    private drawFlame(ctx: CanvasRenderingContext2D, image:HTMLImageElement, frameX: number, frameY: number): void {
        const xInImg = width*frameX;
        const yInImg = height*frameY;
        ctx.drawImage(image, xInImg, yInImg, width, height, this.x, this.y, width, height)
    }
    
    private jump(): void{
        if(this.y==gameSetting.ground-height){
            this.velocityY = -25
        }
    }
}