import Button from "../components/Button.jsx";

const DrinkHero = () => {
    return (
        <section className="bg-[url('/drink-hero-bg.png')] bg-center bg-no-repeat bg-cover pt-6 md:pt-28 pb-[280px] md:pb-28">
            <div className="container mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 px-6 xl:px-0">
                <div className="bg-[#FBFCFF]/[0.89] backdrop-blur-sm p-[30px] rounded-lg max-w-xl z-0">
                    <h1 className="font-bold text-2xl md:text-[42px] mb-[14px] md:mb-5">Our top pick for the week!</h1>
                    <h2 className="font-bold text-[19px] md:text-[32px]">Nok by Alara</h2>
                    <p className="text-xl leading-[32px] max-w-[360px] hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
                    <div className="flex justify-end items-center mt-5">
                        <Button text="Reserve Now" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DrinkHero
