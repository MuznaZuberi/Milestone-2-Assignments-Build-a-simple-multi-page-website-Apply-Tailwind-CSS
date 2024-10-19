"use client";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import  Image from "next/image";

export default function Cover() {
	return(
       
       <div>

        {/* Cover Section Start*/}
       	    <h1 className = "font-bold font-serif text-orange-600 text-4xl ml-3 text-center  pt-[200px] ">
               <Typewriter
               options={{
               strings: ["Sizzels Every Mouthful Bursts with Flavor"],
               autoStart: true,
               loop: true,
                 }}
               />
            </h1>
      
             <section className="body-font bg-black">
             <div className="container mx-auto flex px-4 py-10 md:flex-row flex-col items-center mt-[30px]">
             <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
             <h1 className="font-serif  text-3xl mb-4 text-white pt-20">
                      The Finest Yet Costly  
             </h1>

             <h1 className="font-serif  text-4xl font-bold mb-4 text-orange-600">
                       Mouth Brimming with Flavor
             </h1>
             <p className="mb-8 leading-relaxed font-serif text-white">
                       Sizzles is a restaurant that boasts tempting flavors, encouraging visitors to explore a diverse menu filled with sizzling delights. From gourmet meals to beloved local favorites, Sizzles offers outstanding culinary experiences that will keep you coming back for more. Whether you're in the mood for a light bite or a full meal, Sizzles is the perfect place for delightful dining.
             </p>




             <Link href = "/menu" className=" text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-orange-600 rounded font-bold font-serif">
                           Order Now
             </Link>              
           </div>



        
             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                   className=" w-[100%] h-[600px] rounded-tl-full"
                   alt="cover_img"
                   src={require("../../../img/img_12.jpg")}
                />
             </div>
         </div>
       </section>
     {/* Cover Section End*/}

    </div>

	)
}