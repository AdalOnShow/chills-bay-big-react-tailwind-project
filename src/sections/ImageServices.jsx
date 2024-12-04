import { imageServicesCart } from "../constants/index.js";

const ImageServices = () => {
    return (
        <section className="container mx-auto pt-12 px-6 xl:px-0">
            <h2 className="font-bold text-blueGray text-2xl leading-[54px] lg:text-[42px] text-center">What are you in the mood for?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4">
                {imageServicesCart.map(({ id, img, title }) => (
                    <div className="my-4 md:my-8" key={id}>
                        <img src={img} alt={img} className="object-cover w-full h-[168px] sm:h-[268px] md:h-[368px] lg:h-[468px] xl:h-[600px] mx-auto" />
                        <h3 className="font-bold text-[22px] lg:text-[32px] text-center text-blueGray mt-1">{title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ImageServices
