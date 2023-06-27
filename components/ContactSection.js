import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                        <div className="flex items-center mb-4">
                            <i className="fab fa-facebook-square text-2xl mr-2" />
                            <span>Facebook</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <i className="fab fa-instagram text-2xl mr-2" />
                            <span>Instagram</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <i className="fab fa-linkedin text-2xl mr-2" />
                            <span>LinkedIn</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <i className="fas fa-phone text-2xl mr-2" />
                            <span>Phone</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <i className="fas fa-envelope text-2xl mr-2" />
                            <span>Email</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 p-4">
                        <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
