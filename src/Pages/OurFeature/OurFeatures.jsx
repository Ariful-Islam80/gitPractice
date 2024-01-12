

const OurFeatures = () => {
    return (
        <>

            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-2dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">

                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                                    Our Recent Coming Foods
                                </h2>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {/* Blog Post 1 */}
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="w-full mb-10">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://assets.bonappetit.com/photos/61ba70da510874520d257b78/16:9/w_1599,h_899,c_limit/LEDE_Oma's%20Hideaway,%20Credit%20Christine%20Dong.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                        Dec 22, 2023
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            A Mixed Foods
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        Savor our delightful mixed dishes, blending flavors from diverse cuisines, creating a harmonious culinary experience for your palate.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="w-full mb-10">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://robbreport.com/wp-content/uploads/2020/12/grilled-dorade-vernick-fish.jpg?w=1000"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                        Jan 1, 2024
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Nuts Chicken Mixed Foods
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color dark:text-dark-6">

                                        Indulge in our exquisite nuts-infused chicken dishes, a perfect fusion of crunchy textures and savory flavors, elevating your dining experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Post 3 */}
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="w-full mb-10">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://media.cntraveller.com/photos/62ead5960b87e86bd3c3c13c/16:9/w_2560%2Cc_limit/AF_WenWen_54.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                                        Jan 05, 2024
                                    </span>
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Fried Chicken
                                        </a>
                                    </h3>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                    Savor our crispy and succulent fried chicken delights, expertly seasoned and fried to perfection for an irresistible, finger-licking experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default OurFeatures;