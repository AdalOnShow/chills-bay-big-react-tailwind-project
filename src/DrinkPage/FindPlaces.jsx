import Button from "../components/Button.jsx";

const FindPlaces = () => {
    return (
        <section className="container mx-auto max-w-[1240px] py-7 px-6 xl:px-0">
            <div className="bg-[#FBFCFF] p-[30px] rounded-lg  max-w-5xl drop-shadow-md">
                {/* Title */}
                <h2 className="font-bold text-[26px] md:text-[28px] mb-6 md:mb-2.5">
                    Find the best places to eat and drink for any occasion
                </h2>

                {/* Form */}
                <form className="flex flex-col md:flex-row md:flex-wrap justify-between gap-4 items-center">
                    {/* Location */}
                    <div className="flex-1 w-full md:w-1/5">
                        <label htmlFor="location" className="block text-xs mb-1">
                            Location
                        </label>
                        <select
                            id="location"
                            className="input-box"
                        >
                            <option value="Oshodi, VI">Oshodi, VI</option>
                            <option value="Ikeja, Lagos">Ikeja, Lagos</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div className="flex-1 w-full md:w-1/5">
                        <label htmlFor="date" className="block text-xs mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="input-box"
                        />
                    </div>

                    {/* Time */}
                    <div className="flex-1 w-full md:w-1/5">
                        <label htmlFor="time" className="block text-xs mb-1">
                            Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            className="input-box"
                        />
                    </div>

                    {/* Cuisine */}
                    <div className="flex-1 w-full md:w-1/5">
                        <label htmlFor="cuisine" className="block text-xs mb-1">
                            Cuisine
                        </label>
                        <select
                            id="cuisine"
                            className="input-box"
                        >
                            <option value="Chinese">Chinese</option>
                            <option value="Italian">Italian</option>
                            <option value="Indian">Indian</option>
                        </select>
                    </div>

                    {/* People */}
                    <div className="flex-1 w-full md:w-1/5">
                        <label htmlFor="people" className="block text-xs mb-1">
                            People
                        </label>
                        <select
                            id="people"
                            className="input-box"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    {/* Search Button */}
                    <div className="flex-1 w-full md:w-1/5">
                        <Button type text="Search" className="w-full h-10 md:h-[60px] mt-1" />
                    </div>
                </form>
            </div>
        </section>
    )
}
export default FindPlaces
