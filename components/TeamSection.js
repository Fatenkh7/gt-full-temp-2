import React from 'react';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Founder & CEO',
            image: '/john-doe.jpg',
        },
        {
            name: 'Jane Smith',
            role: 'Creative Director',
            image: '/jane-smith.jpg',
        },
        {
            name: 'Mark Johnson',
            role: 'Lead Developer',
            image: '/mark-johnson.jpg',
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 text-center">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
