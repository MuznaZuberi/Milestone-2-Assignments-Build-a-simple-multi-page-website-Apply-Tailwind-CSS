"use client"
import Typewriter from 'typewriter-effect';
import Image from "next/image"

export default function Our_Chefs() {
	return (

     <div>
       
      <h1 className = "font-bold font-serif text-orange-600 text-4xl ml-3 text-center pb-7  pt-[260px] ">      	
      	<Typewriter
           options={{
              strings: ["Meet Our Experienced Chefs"],
              autoStart: true,
              loop: true,
         }}
             />
      </h1>



          
        {/*Chef Section Start*/}
      	  <div className = "sm:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 m-3">
      	 	 

            
          {/*Chef_01 Section Start*/}
      	 	  <div className = "overflow-hidden rounded-lg border border-2 mb-3  text-center shadow-2xl">
      	 	 	 <Image
                  className=" w-[100%] h-[600px] hover:scale-125"
                  alt="chef_img"
                  src={require("../../../img/img_15.jpg")}
              />
             <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-20">Mary Berry
             </h1>
               <p className = "font-serif text-md text-justify p-3">She is an experienced chef and culinary icon, renowned for her exceptional skills in baking and classic cooking. With a career spanning over five decades, she has mastered creating delightful dishes that combine rich flavors and comforting textures. Known for warm and approachable style, Mary Berry continues to inspire home cooks with timeless recipes and expertise, making a beloved figure in the world.</p>
      	 	 </div>
       {/*Chef_01 Section End*/}








           {/*Chef_02 Section Start*/}
      	 	 <div className = "overflow-hidden rounded-lg border border-2 mb-3  text-center shadow-2xl">
      	 	      <Image
                  className=" w-[100%] h-[600px] hover:scale-125"
                  alt="chef_img"
                  src={require("../../../img/img_08.jpg")}
                 />
                 <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-20">Tom Kerridge</h1>
                  <p className = "font-serif text-md text-justify  p-3">He is a skilled chef and restaurateur, recognized for his creative take on British cuisine. With a focus on high-quality ingredients and crafting robust, tasty dishes, he has made a notable impact on the culinary world.Tom is renowned for his award-winning restaurants, such as The Hand & Flowers, awarded two Michelin stars.
                    His friendly demeanor and commitment to educating others established.</p>    
      	    	 </div>
             {/*Chef_02 Section End*/}  




           {/*Chef_03 Section Start*/}
      	 	     <div className = "overflow-hidden rounded-lg border border-2 mb-3  text-center shadow-2xl">
      	 	        <Image
                    className=" w-[100%] h-[600px] hover:scale-125"
                    alt="chef_img"
                    src={require("../../../img/img_09.jpg")}
                   />
                   <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-20">Nigella Lawson</h1>
                   <p className = "font-serif text-md text-justify  p-3">She is a seasoned chef, culinary author, and TV personality recognized for her accessible and luxurious cooking style. With a career spanning over two decades, she has captivated audiences with  passion for food and  ability to make cooking accessible and enjoyable. Nigella is celebrated for  bestselling cookbooks and popular cooking shows, where she shares  love for rich flavors and comforting dishes.
                   </p>   
                 </div>
             {/*Chef_03 Section Start*/}


               </div>
          {/*Chef Section Start*/}

     </div>

	);
}
