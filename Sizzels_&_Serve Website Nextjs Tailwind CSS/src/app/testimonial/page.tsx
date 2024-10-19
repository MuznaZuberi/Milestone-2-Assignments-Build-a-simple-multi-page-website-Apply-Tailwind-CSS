import Image from "next/image";

export default function Testimonial() {
	return (

    <div>
        

     {/*Testimonial Start*/}   
        <h1 className = "font-bold font-serif text-orange-600 text-4xl text-center animate-bounce  pt-[200px]">TESTI<b className = "text-black">MONIAL</b></h1>
        <div className="bg-orange-600 mt-[30px]  w-[100%] h-[100%]">
          <div className="m-4">
          <div>
          <div className="text-center pt-20 shadow-2xl">
          <Image
            alt="testimonial_img"
            className="w-[100px] h-[100px] mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 "
            src={require("../../../img/testimonial_chef.jpg")}
          />
          <p className = "font-serif p-3 text-justify text-white">
               HENRY LETHAM is a renowned English chef recognized for his creative and scientific methodology in the culinary arts. He serves as the owner and head chef of The Fat Duck, a three-Michelin-star restaurant situated in Bray, Berkshire,frequently listed among the top restaurants globally. Blumenthal is commonly linked to "molecular gastronomy," although he prefers to call it "multi-sensory cooking." His culinary creations reflect a profound curiosity about the science of cooking, concentrating on how factors like temperature, texture, and sound can shape the dining experience. He is well-known for inventing dishes that defy conventional views of food, including his famous "Bacon and Egg Ice Cream" and "Snail Porridge." Beyond his endeavors at The Fat Duck, Heston Blumenthal has launched other thriving establishments, such as Dinner by Heston Blumenthal in London and The Hind's Head, a Michelin-starred pub also based in Bray.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-black mt-6 mb-4" />
          <h2 className="font-bold font-serif text-white text-xl pt-4  p-3">
               HENRY LETHAM
          </h2>
          <p className="font-serif p-3 text-center text-white">Senior Chef</p>
         </div>
        </div>
      </div>
     </div>
   {/*testimonial End*/}   

    </div>


	);
}