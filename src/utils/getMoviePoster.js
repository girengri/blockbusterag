//Si la movie tiene un poster traigalo en caso contrario ponga la imagen por defecto
export function getMovieImg(path, width) {
    return path
        ? `https://image.tmdb.org/t/p/w${width}${path}`
        : "https://res.cloudinary.com/girengri/image/upload/v1639112696/no-image_rez9qi.jpg";
}
