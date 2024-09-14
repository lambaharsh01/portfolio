import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AnimateWords from './animateWords'; 
import isSmallScreen from '../utils/isSmallScreen';

const settings = {
  infinite: true,
  slidesToScroll: 1,
  speed: 3500,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SkillsSection() {

  const smallScreen = isSmallScreen();

  const images = [
    { imageUri: '/skills/js.jpg' },
    { imageUri: '/skills/nodeJs.jpg' },
    { imageUri: '/skills/reactJs.jpg' },
    { imageUri: '/skills/oracleDb.jpg' },
    { imageUri: '/skills/mongoDb.jpg' },
    { imageUri: '/skills/mySql.jpg' },
    { imageUri: '/skills/reactNative.jpg' },
    { imageUri: '/skills/redux.jpg' },
    { imageUri: '/skills/goLang.jpg' },
    { imageUri: '/skills/tailwindCss.jpg' },
    { imageUri: '/skills/bootstrap.jpg' },
    { imageUri: '/skills/css3.jpg' },
    { imageUri: '/skills/html.jpg' },
  ];

  return (
    <div className="w-full pt-4 pb-28 bg-white">

      <div className='w-100 px-4 text-start mb-3 mb-sm-5'>
                <div className={`col-12 darkGreyText pb-1`}>
                    <h1 className={`font-bold me-4 ${ smallScreen ? "text-4xl pb-1" : "text-5xl pb-2"}`}>
                        <AnimateWords string='My' averageTimeGap={0.15} />
                        <br />
                        <AnimateWords string='Tech Stack' averageTimeGap={0.07} />
                    </h1>
                </div>
            </div>
      <div className="w-full px-1">
        <Slider {...settings}>
          {images.map((element, index) => (
            <div key={index} className="px-6">
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={element.imageUri}
                  alt={element.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
