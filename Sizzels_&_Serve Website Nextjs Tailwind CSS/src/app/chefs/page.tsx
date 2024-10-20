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
               <p className = "font-serif text-md text-center p-3">She is an experienced chef and culinary icon, renowned for her exceptional skills in baking and classic cooking. With a career spanning over five decades, she has mastered creating delightful dishes that combine rich flavors and comforting textures. Known for warm and approachable style, Mary Berry continues to inspire home cooks with timeless recipes and expertise, making a beloved figure in the culinary world.</p>

             <span className="inline-flex p-4">
               <a className="text-orange-600 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
               </a>

              <a className="ml-3 text-orange-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
               </a>

              <a className="ml-3 text-orange-600 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
               </a>
            </span>
      	 	 </div>
       {/*Chef_01 Section End*/}








           {/*Chef_02 Section Start*/}
      	 	 <div className = "overflow-hidden rounded-lg border border-2 mb-3  text-center shadow-2xl">
      	 	      <Image
                  className=" w-[100%] h-[600px] hover:scale-125"
                  alt="image"
                  src={require("../../../img/img_08.jpg")}
                 />
                 <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-20">Tom Kerridge</h1>
                  <p className = "font-serif text-md text-center p-3">He is a skilled chef and restaurateur, recognized for his creative take on British cuisine. With a focus on high-quality ingredients and crafting robust, tasty dishes, he has made a notable impact on the culinary world.Tom is renowned for his award-winning restaurants, such as The Hand & Flowers, awarded two Michelin stars.

.
                    His friendly demeanor and commitment to educating others make him a respected figure.</p>

                  <span className="inline-flex p-4">
                    <a className="text-orange-600 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                     </svg>
                      </a>


                    <a className="ml-3 text-orange-600">
                      <svg
                       fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      </a>


                     <a className="ml-3 text-orange-600 ">
                     <svg
                       fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      >
                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                     </svg>
                     </a>
                   </span>     
      	    	 </div>
             {/*Chef_02 Section End*/}  




           {/*Chef_03 Section Start*/}
      	 	     <div className = "overflow-hidden rounded-lg border border-2 mb-3  text-center shadow-2xl">
      	 	        <Image
                    className=" w-[100%] h-[600px] hover:scale-125"
                    alt="image"
                    src={require("../../../img/img_09.jpg")}
                   />
                   <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-20">Nigella Lawson</h1>
                   <p className = "font-serif text-md text-center p-3">She is an experienced chef, food writer, and television personality known for  approachable and indulgent style of cooking. With a career spanning over two decades, she has captivated audiences with  passion for food and  ability to make cooking accessible and enjoyable. Nigella is celebrated for  bestselling cookbooks and popular cooking shows, where she shares  love for rich flavors and comforting dishes.
                   </p>

                  <span className="inline-flex p-4">
                     <a className="text-orange-600 ">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                      >
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                     </svg>
                     </a>


                     <a className="ml-3 text-orange-600">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      </a>


                     <a className="ml-3 text-orange-600 ">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                         >
                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                         </svg>
                         </a>
                     </span>   
                 </div>
             {/*Chef_03 Section Start*/}


               </div>
          {/*Chef Section Start*/}

     </div>

	);
}
