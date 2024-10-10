import React from 'react';
import Slider from 'react-slick';
import './Slider.css'; // Create a CSS file for additional styling if needed

const CampaignSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const campaigns = [
        {
            image: 'https://storage.googleapis.com/adforum-media/34682002/ad_34682002_a63ddf5f602c6f2b_web.jpg',
            title: 'Campaign 1',
            link: '#',
        },
        {
            image: 'https://assets.weforum.org/project/image/OPwOyRd4Izo0HpvdeVqtFfiNNQxry36ROxJOIxG0ocg.png',
            title: 'Campaign 2',
            link: '#',
        },
        {
            image: 'https://digitalsynopsis.com/wp-content/uploads/2014/10/public-service-announcements-social-issue-ads-1.jpg',
            title: 'Campaign 3',
            link: '#',
        },
        {
            image: 'https://campaignsoftheworld.com/wp-content/uploads/2024/05/Shield_Against_Cancer_Epic_games-740x460.webp',
            title: 'Campaign 4',
            link: '#',
        },
    ];

    return (
        <div className="campaign-slider">
            <Slider {...settings}>
                {campaigns.map((campaign, index) => (
                    <div key={index} className="slider-item">
                        <img src={campaign.image} alt={campaign.title} />
                        <div className="slider-content">
                            <h2>{campaign.title}</h2>
                            <a href={campaign.link} className="read-more-button">Read More</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CampaignSlider;