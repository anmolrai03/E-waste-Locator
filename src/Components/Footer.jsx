import React from "react";
import Logo from "../assets/e-wastelogo.png";
import '../assets/Footer/style.css';

const Footer = () => {
  return (
    <div>
        <div id='footer'>
            <div className="foot-panel1">
            <a href="#">Back to top</a>
            </div>
            <div className="foot-panel2">
                <div className="footer-logo">
                    <div className="slogan">
                        "Reduce,Reuse,Recycle:<br />Keep E-Waste Out of <br /> Landfill"
                        <hr />
                    </div>
                    <div className="logo">
                        <img src={Logo} className="h-[10vh] w-[10vh]"/>
                    </div>
                </div>
                <div className="footer-options">
                    <ul>
                        <li>
                            <a href="#">
                                HOME
                              </a>
                            <a href=""
                              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
                            >
                              CONTACT US
                            </a>
                            <a href=""
                              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
                            >
                              ABOUT US
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="subscribe">
                    <div className="subscribe-lines">
                        Subscribe for more talks
                    </div>
                    <div className="subscribe-box">
                        <div className="email">
                            <div>E-mail</div>
                            <input type="text-area" placeholder="Enter your E-mail" />
                        </div>
                        <div className="name">
                            <div>Name</div>
                            <input type="text-area" placeholder="Enter your Name" />
                        </div>
                        <div className="button">
                            <button>Subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="foot-panel3">
                Thanks for visiting our site
            </div>
            
            <div className="foot-panel4">
                <div className="foot-pages">
                    <a href="a">Condition of use</a>
                    <a href="a">Privacy Notice</a>
                    <a href="a">Your ads Privacy Choices</a>
                </div>
                <div className="copyright">
                    © 1996-2024 Inc. or its affiliates
                </div>
            </div>
        </div>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <div>
//       <div className="h-fit w-full mt-[20vh] md:flex flex-col justify-center shadow-3xl  p-5">
//         <div>
//           <h1 className="font-semibold font-montserrat text-xl text-[#FEFBE5] text-left">
//             You can help <br /> Shape the Future
//           </h1>
//         </div>

//         <div className="mt-5 md:flex justify-between items-center">
//           <div className="flex gap-2 ">
//             <img src={Logo} alt="logo" className="h-[15vh]" />
//           </div>

//           <div>
//           <ul className="flex gap-2">
//             <li
//               className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               <a>Home |</a>
//             </li>
//             <li
//               className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer"
//               onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
//             >
//               <a>About |</a>
//             </li>
//             {/* <li
//               className="font-semibold font-montserrat hover:text-[#ff5757] cursor-pointer"
//               onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
//             >
//               <a>Education |</a>
//             </li> */}
//             <li
//               className="font-semibold font-montserrat hover:text-[#ff5757] cursor-pointer"
//               onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
//             >
//               <a>Contact</a>
//             </li>
//           </ul>
//           </div>
//         </div>
//         <div className="flex  items-center justify-center mt-5">
//           <h1 className="flex justify-center text-xl text-left   font-montserrat font-semibold gap-2">
//             Created by<span className="font-bold text-xl  font-montserrat text-[#ff5757]">Echakran</span>team
//           </h1>
//           </div>
//       </div>
//     </div>
//   );
// };

export default Footer;
