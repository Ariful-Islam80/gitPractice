/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <>

            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            Welcome to Bangla Restaurant, where culinary excellence meets a warm, inviting atmosphere. Nestled in the heart of Chittagong, our restaurant is a haven for food enthusiasts seeking a delightful dining experience. At Bangla Restaurant, we take pride in crafting a menu that seamlessly blends fresh, locally-sourced ingredients with innovative culinary techniques.

                            Our dedicated team of chefs is committed to delivering a symphony of flavors that tantalize the taste buds, ensuring each dish is a culinary masterpiece. Whether you're savoring our signature dishes, enjoying a cozy dinner with loved ones, or hosting a special event, our commitment to quality and passion for hospitality shines through.

                            Beyond the delectable cuisine, Bangla Restaurant is a place where memories are made. Our thoughtfully designed ambiance, attentive staff, and commitment to exceptional service create an environment that transcends the ordinary dining experience.

                            Join us at Bangla Restaurant for a journey of gastronomic delight, where every meal tells a story, and every visit becomes a cherished moment.</p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src="https://www.randrmagonline.com/ext/resources/2021/03/30/1-RR0421-Cline-high-performing-team-members-900x550.jpg?1617115896" alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            Embark on the culinary journey of Bangla Restaurant, where passion and talent converge to create a remarkable dining experience. Our story is one of collaboration, with a team of dedicated professionals who share a common love for food and hospitality. From our skilled chefs who meticulously craft each dish to our attentive service team that ensures your comfort, every member at Bangla Restaurant plays a vital role in curating moments of culinary delight. Our story is woven with the threads of commitment, creativity, and a genuine desire to elevate your dining experience. Join us as we continue to write the chapters of our gastronomic adventure at Bangla Restaurant.</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default About;