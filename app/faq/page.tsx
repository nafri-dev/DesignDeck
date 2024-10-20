// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useTheme } from "next-themes";

// const faqs = [
//   {
//     question: "What is DesignDeck?",
//     answer:
//       "DesignDeck is a web-based collaborative design tool, similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API. It allows teams to seamlessly collaborate on designing interfaces in real-time.",
//   },
//   {
//     question: "How do I get started with DesignDeck?",
//     answer:
//       "To get started, clone the repository from GitHub, install the dependencies, and run the project locally using npm. The full guide is available in the README.md file.",
//   },
//   {
//     question: "What features does DesignDeck offer?",
//     answer:
//       "DesignDeck offers live collaboration, shape manipulation, free drawing, text addition, export to PDF, and many more features to help you design interfaces collaboratively.",
//   },
//   {
//     question: "How can I contribute to DesignDeck?",
//     answer:
//       "You can contribute by forking the repository, creating a new branch, making your changes, and submitting a pull request. Contributions are always welcome!",
//   },
//   {
//     question: "Is DesignDeck open source?",
//     answer:
//       "Yes, DesignDeck is an open-source project, and we encourage contributions from the community.",
//   },
//   {
//     question: "Does DesignDeck support real-time collaboration?",
//     answer:
//       "Yes, with the LiveBlocks API integrated into DesignDeck, multiple users can collaborate in real-time. You can see live updates of cursor positions and design changes as they happen.",
//   },
//   {
//     question: "What technologies power DesignDeck?",
//     answer:
//       "DesignDeck is built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API for real-time collaboration, along with Fabric.js for manipulating graphics and interactive content.",
//   },
//   {
//     question: "How can I export my designs in DesignDeck?",
//     answer:
//       "DesignDeck allows you to export designs to PDF format. Simply select the elements you want to export and use the export option to generate a downloadable PDF.",
//   },
//   {
//     question: "Are there keyboard shortcuts available in DesignDeck?",
//     answer:
//       "Currently, DesignDeck does not supports keyboard shortcuts,the feature is under development, once prepare user will be abel to do faster design operations, such as Undo (Ctrl+Z), Redo (Ctrl+Y), and copy-pasting elements.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };
//   const {systemTheme, theme, setTheme} = useTheme();
//   const currentTheme = theme === "dark" ? systemTheme : theme;
//   const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     if(currentTheme==='dark'){
//       setDarkMode(true);
//     }
//     else{
//       setDarkMode(false);
//     }
//   },[currentTheme])
//   // console.log(themeCheck)
//   // console.log(darkMode)

//   return (
//     <div className="container mx-auto p-6 min-h-screen h-screen overflow-y-auto">
//       {/* Home Button */}
//       <div className="text-left mb-4">
//         <Link href="/">
//           <button className={`px-4 py-2 rounded ${darkMode ? "bg-blue-900 text-white  hover:bg-blue-800 " : "bg-blue-200 text-black  hover:bg-blue-300" }transition duration-300`}>
//             Home
//           </button>
//         </Link>
//       </div>
//       <h1 className={`text-4xl font-bold mb-6 text-center ${darkMode ? "text-white " : "text-black"}`}>
//         Frequently Asked Questions
//       </h1>
//       <div className="space-y-4 max-w-2xl mx-auto">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-gray-700 py-4 cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//                 <h2
//                   className={`font-semibold text-lg ${
//                     activeIndex === index? darkMode ? "text-white" : "text-black" 
//                       : darkMode ? "text-gray-400" : "text-black"}`}>
//                   {faq.question}
//                 </h2>
//               <span className={` ${darkMode ? "text-gray-400" : "text-black"}`}>
//                 {activeIndex === index ? "-" : "+"}
//               </span>
//             </div>
//             {activeIndex === index && (
//               <p className={`mt-2  ${darkMode ? "text-gray-400" : "text-black"}`}>{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;


"use client";
import { faq } from "@/constants";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [show, setShow] = useState<number | null>(null);;

  const handleAccordion = (index: number) => {
    setShowAnswer(index);
    setShow(index);
  };

  const closeAccordion = () => {
    setShowAnswer(null);
    setShow(null);
  };

  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl gradient-text">Frequently Asked Questions</h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light my-5 leading-snug md:w-1/3 text-center">
          Find answers to commonly asked questions about our product and
          services
        </p>
      </div>
      <div className="right mb-36 w-2/3 mx-auto select-none space-y-10">
        {faq.map((faq, i) => (
          <div key={i}>
            <div className="dm-bg-gradient-to-r from-purple-800 shadow-lg shadow-[#3b0a45] p-4 mx-3 md:p-7 md:m-5 rounded-xl">
              <div className="flex justify-between">
                <h1 className="md:text-2xl text-lg dm-sans-font w-[87%]">
                  {faq.question}
                </h1>
                {show===i ? (
                  <IoIosArrowUp
                    className="text-2xl cursor-pointer"
                    onClick={closeAccordion}
                  />
                ) : (
                  <IoIosArrowDown
                    className="text-2xl cursor-pointer"
                    onClick={() => handleAccordion(i)}
                  />
                )}
              </div>

              {showAnswer === i && (
                <p className="mt-5 text-lg  dm-sans-font w-[95%] md:w-5/6">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;