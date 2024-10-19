import Image from "next/image";
import Link from "next/link";
export default function Menu() {
	return (
     
     <div>


        {/* Menu Section Start*/}   
            <h1 className = "font-bold font-serif text-orange-600 text-6xl ml-3 pb-7 text-center  pt-[270px]">Me<b className = "text-black">nu</b></h1>
            <div className = "sm:grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-7 m-4">


          {/*Menu_01 Start*/}
            <div className = "overflow-hidden rounded-lg border border-2 mb-3 shadow-xl">
           		<Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_01.png")}
              />

                <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Pork <b className = "text-black"> Sandwich</b>
                </h1> 
                <p className = "font-serif text-md text-center p-3">A Pork Sandwich is a satisfying treat consisting of succulent, slow-cooked pork stacked generously between two pieces of crusty bread. Topped with zesty sauces and fresh ingredients, this sandwich provides an ideal blend of flavors and textures that will fulfill any appetite.
                </p>   

                <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 w-[120px] rounded-xl hover:bg-black hover:text-white">
                  <Link href = "/menu">Read More</Link>  
                </div> 
           	</div>
          {/*Menu_01 End*/}




            
          {/*Menu_02 Start*/}
            <div className = "overflow-hidden rounded-lg border border-2 mb-3 shadow-xl">
           		  <Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_02.png")}
                />
                  <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Easter <b className = "text-black"> Delight</b>
                  </h1>
                   <p className = "font-serif text-md text-center p-3">Easter Delight is a festive dessert that brings together a medley of flavors, featuring layers of rich chocolate, creamy frosting, and seasonal fruits. This indulgent treat captures the essence of Easter celebrations, making it a perfect centerpiece for any festive gathering.
                   </p> 
                   <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 w-[120px] rounded-xl hover:bg-black hover:text-white">
                     <Link href = "/menu">Read More</Link>  
                   </div>   
           	</div>
          {/*Menu_02 End*/}   



          
          {/*Menu_03 Start*/}   
              <div className = "overflow-hidden rounded-lg border border-2 mb-3 shadow-xl">
           		  <Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_03.png")}
                 />
                 <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Roasted <b className = "text-black"> Marrow</b>
                 </h1>
                 <p className = "font-serif text-md text-center p-3">Roasted Marrow is a subtly flavored dish that highlights tender marrow bones, perfectly roasted to allow the rich, buttery marrow to ooze into a savory, caramelized delight. Paired with crusty bread and a dash of herbs, it provides a lavish and satisfying experience for food lovers.
                 </p> 
                 <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 w-[120px] rounded-xl hover:bg-black hover:text-white">
                   <Link href = "/menu">Read More</Link>  
                 </div>      
           	</div>
          {/*Menu_03 End*/}   
             



          {/*Menu_04 Start*/}   
               <div className = "overflow-hidden rounded-lg border border-2 mt-10 shadow-xl ">
           		 <Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_04.png")}
               />
                <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Special <b className = "text-black"> Chops Chicken</b>
                </h1> 
                <p className = "font-serif text-md text-center p-3">Special Chops Chicken showcases succulent, marinated chicken pieces that are grilled flawlessly, overflowing with deep flavors and fragrant spices. Accompanied by a tangy sauce, this meal provides a wonderful harmony of taste and texture, making it an essential choice for chicken enthusiasts.
                </p>  
                <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 rounded-xl hover:bg-black hover:text-white w-[120px]">
                   <Link href = "/menu">Read More</Link>  
                </div>  
           	</div>
          {/*Menu_04 End*/}   



          {/*Menu_05 Start*/}   
            <div className = "overflow-hidden rounded-lg border border-2 mt-10 shadow-xl">
           		  <Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_05.png")}
                />
                  <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Veg  <b className = "text-black"> Combo</b>
                  </h1>
                   <p className = "font-serif text-md text-center p-3">Veg Combo is a vibrant selection of seasonal vegetables, expertly prepared to highlight their natural flavors. This colorful medley is served with a variety of dips and sauces, offering a deliciously satisfying and wholesome experience for veggie enthusiasts.
                   </p>  
                   <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 w-[120px] rounded-xl hover:bg-black hover:text-white">
                      <Link href = "/menu">Read More</Link>  
                   </div>  
           	</div>
          {/*Menu_05 End*/}   






          {/*Menu_06 Start*/}   
            <div className = "overflow-hidden rounded-lg border border-2 mt-10 shadow-xl ">
           		 <Image
                  className=" w-[100%] hover:scale-125"
                  alt="image"
                  src={require("../../../img/menu_06.png")}
               />
                  <h1 className = "font-bold font-serif text-orange-600 text-xl text-center pt-16">Pakistani  <b className = "text-black"> Special Burger</b>
                  </h1>
                  <p className = "font-serif text-md text-center p-3">Pakistani Special Burger is a flavorful fusion of tender, spiced meat patty, topped with fresh vegetables and zesty chutneys, all nestled in a soft bun. This mouthwatering burger combines traditional Pakistani spices with classic burger elements, delivering a unique and satisfying taste.
                  </p>
                  <div className = "mx-auto text-center m-3 bg-orange-600 text-white p-2 mb-7 w-[120px] rounded-xl hover:bg-black hover:text-white">
                    <Link href = "/menu">Read More</Link>  
                 </div> 

          {/*Menu_06 End*/}   




          </div>
          </div>
       {/*Menu Section End*/}   

        </div>
	);
}