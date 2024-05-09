import React from 'react';

const Qualities = () => {
    const qualities = [
        {
            id: 1,
            image: '/community.jpg',
            title: 'COMMUNITY DEVELOPMENT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore nostrum temporibus minima ex delectus, pariatur laborum, totam nemo fugit quisquam corrupti et blanditiis eos voluptatibus minus repellat dolorem deserunt ut saepe consequatur. Repudiandae omnis expedita quo rerum, porro molestias.',
        },
        {
            id: 2,
            image: '/transparency.jpg',
            title: 'TRANSPARENCY',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore nostrum temporibus minima ex delectus, pariatur laborum, totam nemo fugit quisquam corrupti et blanditiis eos voluptatibus minus repellat dolorem deserunt ut saepe consequatur. Repudiandae omnis expedita quo rerum, porro molestias.',

        },
        {
            id: 3,
            image: '/impact.jpg',
            title: 'IMPACT MEASUREMENT',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore nostrum temporibus minima ex delectus, pariatur laborum, totam nemo fugit quisquam corrupti et blanditiis eos voluptatibus minus repellat dolorem deserunt ut saepe consequatur. Repudiandae omnis expedita quo rerum, porro molestias.',

        },
    ];
    return (
        <>
            <div className="qualities">
                <h2>OUR QUALITIES</h2>
                <div className="container">
                    {
                        qualities.map(element => {
                            return (
                                <div className="card" key={element.id}>
                                    <div className='img-wrapper'>
                                        <img src={element.image} alt={element.title} />
                                    </div>
                                    <div className='content'>
                                        <p className='title'>{element.title}</p>
                                        <p className='description'>{element.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Qualities;