const ImageGallery = () => {
    return (
        <section className="container mx-auto max-w-[1240px] py-4 md:py-12 px-6 xl:px-0">
            <h2 className="font-bold text-2xl  mb-6">See How people are chilling on <span className="text-primary"> Chillsbay</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-6">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <img src={`/galleryImage-${item}.png`} alt={`img${item}`} key={item} className="w-full h-[160px] md:h-[200px] object-cover hover:scale-105 transition-all duration-200" />
                    ))
                }
            </div>
        </section>
    )
}
export default ImageGallery
