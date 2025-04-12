import { Link } from "react-router-dom";
import { Home, User, Settings, BookOpen, School, Award, Clock, CheckCircle } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

const HomePage = () => {
  
  const headingRef = useRef();
  //   useGSAP(() => {
//     gsap.fromTo(
//       headingRef.current,
//       { y: -15, opacity: 0 }, // Initial state
//       { 
//         y: 0, opacity: 1, duration: 1.5,
//         scrollTrigger: {
//           trigger: headingRef.current, 
//           start: "top 80%", 
//           toggleActions: "play none none reverse"
//         }
//       } 
//     );


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <School className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to EduScholarship</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Your gateway to educational opportunities. Find and apply for scholarships that match your profile and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose EduScholarship?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Wide Range of Scholarships</h3>
              </div>
              <p className="text-gray-600">
                Access hundreds of scholarships from various institutions and organizations all in one place.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Personalized Matches</h3>
              </div>
              <p className="text-gray-600">
                Our system matches you with scholarships that fit your qualifications and interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Deadline Alerts</h3>
              </div>
              <p className="text-gray-600">
                Never miss an application deadline with our timely reminders and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Create Your Profile</h3>
              <p className="text-gray-600">
                Register and complete your profile with your academic and personal information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Find Scholarships</h3>
              <p className="text-gray-600">
                Browse or get matched with scholarships that fit your profile.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Apply Easily</h3>
              <p className="text-gray-600">
                Submit applications directly through our platform with all required documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Find Your Scholarship?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have found their perfect scholarship through our platform.
          </p>
          <Link 
            to="/register" 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Scroll = () => {
//   const headingRef = useRef();
//   const card1Ref = useRef();
//   const card2Ref = useRef();
//   const card3Ref = useRef();
//   const card4Ref = useRef();
//   const card5Ref = useRef();
//   const card6Ref = useRef();
//   const borderRef = useRef(null);

//   const handleHover = () => {
//     gsap.fromTo(
//       borderRef.current,
//       { scaleX: 0, opacity: 0, transformOrigin: "left" }, // Initial state
//       { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // Target state
//     );
//   };

//   const handleLeave = () => {
//     gsap.to(borderRef.current, {
//       scaleX: 0,
//       opacity: 0,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   useGSAP(() => {
//     gsap.fromTo(
//       headingRef.current,
//       { y: -15, opacity: 0 }, // Initial state
//       { 
//         y: 0, opacity: 1, duration: 1.5,
//         scrollTrigger: {
//           trigger: headingRef.current, 
//           start: "top 80%", 
//           toggleActions: "play none none reverse"
//         }
//       } 
//     );

//     // Animate left-moving cards
//     const leftCards = [card1Ref, card3Ref, card5Ref];
//     leftCards.forEach((card, index) => {
//       gsap.fromTo(
//         card.current,
//         { x: -100, opacity: 0 },
//         { 
//           x: 0, opacity: 1, duration: 1.5, delay: index * 0.1,
//           scrollTrigger: {
//             trigger: card.current,
//             start: "top 90%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );
//     });

//     // Animate right-moving cards
//     const rightCards = [card2Ref, card4Ref, card6Ref];
//     rightCards.forEach((card, index) => {
//       gsap.fromTo(
//         card.current,
//         { x: 100, opacity: 0 },
//         { 
//           x: 0, opacity: 1, duration: 1.5, delay: index * 0.1,
//           scrollTrigger: {
//             trigger: card.current,
//             start: "top 90%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );
//     });
//   });

//   return (
//     <div className="min-w-full flex flex-col items-center mx-auto my-10 p-4">
      
//       {/* Navigation with Animated Border on Hover */}
//       <nav className="flex justify-center gap-5">
//         <ul className="space-y-4">
//           <li
//             onMouseEnter={handleHover}
//             onMouseLeave={handleLeave}
//             className="relative list-none font-medium text-xl cursor-pointer"
//           >
//             Name
//             {/* Border element */}
//             <div
//               ref={borderRef}
//               className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0"
//             ></div>
//           </li>
//         </ul>
//       </nav>

//       {/* Heading Animation */}
//       <h1 ref={headingRef} className="text-2xl font-semibold text-gray-400 py-3">
//         My name is Abdullah
//       </h1>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         {[card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref].map(
//           (ref, index) => (
//             <div
//               key={index}
//               ref={ref}
//               className="w-[300px] p-4 h-[400px] rounded-lg border border-gray-400 card shadow-lg"
//             >
//               <h1 className="text-2xl font-semibold py-1">Heading {index + 1}</h1>
//               <p className="-tracking-tighter text-gray-600">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit...
//               </p>
//             </div>
//           )
//         )}
//       </div>

//     </div>
//   );
// };

// export default Scroll;