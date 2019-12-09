import pngImages from './images/*.png'

export const loadImage = (fileName:string) => {
    const filePath = pngImages[fileName] as string
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => resolve(image)
        image.onerror = reject
        image.src = filePath
    }) as Promise<HTMLImageElement>
}