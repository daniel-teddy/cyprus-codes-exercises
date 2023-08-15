import React, {useEffect, useState} from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { dimension,
  dolargif,
  Poundgif, } from '../assets';
/* const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
     
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
           <span className='text-green-400'>{title}</span>     <span className='text-red-600'>selam</span>
        </h3>
      </div>
      
    </motion.div>
  </Tilt>
); */

const MyServiceCard = ({ index, buying, seling,  icon }) => (
  <div className='xs:w-[250px] w-full'>
     
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
      
        className='bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <div className='text-white w-full text-[20px] font-bold flex flex-row text-center justify-around items-center '>
           <span className='text-green-400'>{buying}</span>     <span className='text-red-600'>{seling}</span>
        </div>
      </div>
      
    </motion.div>
  </div>
);
const Hero = () => {
  const [exchangeRatesUsd, setExchangeRatesUsd] = useState({});
    const [exchangeRatesEuro, setExchangeRatesEuro] = useState({});
    const [exchangeRatesGbp, setExchangeRatesGbp] = useState({});


    useEffect(() => {
      const fetchExchangeRatesUsd = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/usd'
          );
         // console.log(response);
          setExchangeRatesUsd(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesUsd();
  
      const fetchExchangeRatesEuro = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/eur'
          );
         // console.log(response);
          setExchangeRatesEuro(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesEuro();
  
      const fetchExchangeRatesGbp = async () => {
        try {
          const response = await axios.get(
            'https://open.er-api.com/v6/latest/gbp'
          );
         // console.log(response);
          setExchangeRatesGbp(response.data.rates);
        } catch (error) {
          console.log('Error fetching exchange rates:', error);
        }
      };
      fetchExchangeRatesGbp();
  
    }, []);
    const formatRate = (rate) => {
      return parseFloat(rate).toFixed(2);
    };
    const USDtoTL = formatRate(exchangeRatesUsd.TRY);
    const EURtoTL = formatRate(exchangeRatesEuro.TRY);
    const GBPtoTL = formatRate(exchangeRatesGbp.TRY);

    const USDtoTLs = formatRate(exchangeRatesUsd.TRY + 0.30);
    const EURtoTLs = formatRate(exchangeRatesEuro.TRY + 0.35);
    const GBPtoTLs = formatRate(exchangeRatesGbp.TRY + 0.45);



  return (
    <>
        <section className={`relative w-full h-screen mx-auto`}>
      <div
         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} hidden flex-row items-start gap-5 justify-center`}
         >
      
      </div>
     <div className="flex items-center justify-center flex-col">
    
       
        <div className="mt-16">
          <h1 className={`${styles.heroHeadText} text-white font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
            Musmer <span className='text-[rgb(255,112,13)]'>Exchange</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            En iyi oranlar,En hızlı kolay ve <br className='sm:block hidden' />
            Güvenilir Doviz İşlemleri.
          </p>
        </div>
        <div className='mt-20 flex  gap-10 flex-col md:flex-row  justify-center md:items-center'>
          {/* {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))} */}
          <MyServiceCard 
          icon={dolargif}
          buying={USDtoTL}
          seling={USDtoTLs}
          />
          <MyServiceCard 
          icon={dimension}
          buying={EURtoTL}
          seling={EURtoTLs}
          />
          <MyServiceCard 
          icon={Poundgif}
          buying={GBPtoTL}
          seling={GBPtoTLs}
          />
      </div> 
     </div>
          
    </section>

    </>

 
  );
  
};

export default SectionWrapper(Hero,"Hero");
