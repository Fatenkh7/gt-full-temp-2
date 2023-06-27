import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: 'Web Design',
            description: 'We create beautiful and responsive websites that engage your audience.',
            icon: 'fas fa-desktop',
        },
        {
            title: 'Mobile App Development',
            description: 'We develop mobile applications for iOS and Android platforms.',
            icon: 'fas fa-mobile-alt',
        },
        {
            title: 'E-commerce Solutions',
            description: 'We provide end-to-end e-commerce solutions to help you sell your products online.',
            icon: 'fas fa-shopping-cart',
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                        >
                            <i className={`text-4xl mb-4 ${service.icon}`} />
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
