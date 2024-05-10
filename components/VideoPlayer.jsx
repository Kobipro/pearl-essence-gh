'use client'
import React from 'react';
import styles from './page.module.css';

export default function VideoPlayer() {
     return (
        <main className={styles.main}>
            <div className={styles.contents}>
                </div>
           {/* <video
                ref={videoRef}
                src={require('../public/videos/video.mp4')}
                autoPlay
                loop
                className={styles.video}
            />*/}
            <iframe
                className={styles.video}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PpQt_bJd1RI?si=JTDwxSLoGfVf5OoB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
        </main>
    );
}




// import React from 'react';

// const VideoPlayer = () => {
//   return (
//     <div className="bg-gray-100 py-8 px-4 md:px-8 mt-8 ">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-center text-xl font-bold mb-4">What Our Customers Have to Say</h2>
//         <div className="flex flex-col items-center ">
//           <div className="relative overflow-hidden mb-8 rounded-md">
//             <div className="aspect-w-16 aspect-h-9  ">
//               <iframe
//                 width="560"
//                 height="315"
//                 src="https://www.youtube.com/embed/PpQt_bJd1RI?si=JTDwxSLoGfVf5OoB"
//                 title="YouTube video player"
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerpolicy="strict-origin-when-cross-origin"
//                 allowfullscreen
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;








// 'use client'
// import React, { useRef, useEffect } from 'react';
// import { FiArrowUpRight } from 'react-icons/fi';
// import styles from './page.module.css';

// export default function VideoPlayer() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Adjust this threshold as needed
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Video is now visible, play it
//                     if (videoRef.current) {
//                         videoRef.current.play();
//                     }
//                 } else {
//                     // Video is not visible, pause it
//                     if (videoRef.current) {
//                         videoRef.current.pause();
//                     }
//                 }
//             });
//         }, options);

//         observer.observe(videoRef.current);

//         return () => {
//             observer.unobserve(videoRef.current);
//         };
//     }, []);

//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 <div className={styles.buttons}>
//                  <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//                     <button>Youtube channel
//            <span className="ml-1">
//        <FiArrowUpRight className="kink-icon" />
//           </span>
//                     </button>
//                   </a>   
//                 </div>
//             </div>
//             <video
//                 ref={videoRef}
//                 src={require('../public/videos/video.mp4')}
//                 autoPlay
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }





// import React, { useRef, useEffect } from 'react';
// import styles from './page.module.css';

// export default function VideoPlayer() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Adjust this threshold as needed
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Video is now visible, play it
//                     if (videoRef.current) {
//                         videoRef.current.play();
//                     }
//                 } else {
//                     // Video is not visible, pause it
//                     if (videoRef.current) {
//                         videoRef.current.pause();
//                     }
//                 }
//             });
//         }, options);

//         observer.observe(videoRef.current);

//         return () => {
//             observer.unobserve(videoRef.current);
//         };
//     }, []);

//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 {/* <h1>deep blue cinematics</h1> */}
//                 <div className={styles.buttons}>
//                <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//           <button>Youtube channel</button>
//                </a>
 
//                     {/*<button href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE"
//                     >Youtube channel</button>*/}
//                     {/* <button>our story</button> */}
//                 </div>
//             </div>
//             <video
//                 ref={videoRef}
//                 src={require('../public/videos/video.mp4')}
//                 autoPlay
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }



// // "use client";

// // import styles from "./page.module.css";

// // export default function  VideoPlayer() {
// //     return (
// //         <main className={styles.main}>
// //             <div className={styles.contents}>
// //                {/* <h1>deep blue cinematics</h1>*/}
// //                 <div className={styles.buttons}>
// //                     <button>Youtube channel</button>
// //                   {/*  <button>our story</button>*/}
// //                 </div>
// //             </div>
// //             <video
// //                 src={require("../public/videos/video.mp4")}
// //                 autoPlay
// //                 // muted
// //                 loop
// //                 className={styles.video}
// //             />
// //         </main>
// //     );
// // }







// import styles from "./page.module.css";

// export default function Home() {
//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                  <div className={styles.buttons}>
//                   <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//                      <button>Youtube channel</button>
//                    </a>   
//                  </div>
//              </div>
//             <video
//                 src={require('../public/videos/video.mp4')}
//                 autoPlay
//                 muted
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }



// 'use client'
// import React, { useRef, useEffect } from 'react';
// import styles from './page.module.css';

// export default function VideoPlayer() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Adjust this threshold as needed
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Video is now visible, play it
//                     if (videoRef.current) {
//                         videoRef.current.play();
//                     }
//                 } else {
//                     // Video is not visible, pause it
//                     if (videoRef.current) {
//                         videoRef.current.pause();
//                     }
//                 }
//             });
//         }, options);

//         observer.observe(videoRef.current);

//         return () => {
//             observer.unobserve(videoRef.current);
//         };
//     }, []);

//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 <div className={styles.buttons}>
//                  <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//                     <button>Youtube channel</button>
//                   </a>   
//                 </div>
//             </div>
//             <video
//                 ref={videoRef}
//                 src={require('../public/videos/video.mp4')}
//                 autoPlay
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }





// import React, { useRef, useEffect } from 'react';
// import styles from './page.module.css';

// export default function VideoPlayer() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Adjust this threshold as needed
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Video is now visible, play it
//                     if (videoRef.current) {
//                         videoRef.current.play();
//                     }
//                 } else {
//                     // Video is not visible, pause it
//                     if (videoRef.current) {
//                         videoRef.current.pause();
//                     }
//                 }
//             });
//         }, options);

//         observer.observe(videoRef.current);

//         return () => {
//             observer.unobserve(videoRef.current);
//         };
//     }, []);

//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 {/* <h1>deep blue cinematics</h1> */}
//                 <div className={styles.buttons}>
//                <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//           <button>Youtube channel</button>
//                </a>
 
//                     {/*<button href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE"
//                     >Youtube channel</button>*/}
//                     {/* <button>our story</button> */}
//                 </div>
//             </div>
//             <video
//                 ref={videoRef}
//                 src={require('../public/videos/video.mp4')}
//                 autoPlay
//                 loop
//                 className={styles.video}
//             />
//         </main>
//     );
// }



// // "use client";

// // import styles from "./page.module.css";

// // export default function  VideoPlayer() {
// //     return (
// //         <main className={styles.main}>
// //             <div className={styles.contents}>
// //                {/* <h1>deep blue cinematics</h1>*/}
// //                 <div className={styles.buttons}>
// //                     <button>Youtube channel</button>
// //                   {/*  <button>our story</button>*/}
// //                 </div>
// //             </div>
// //             <video
// //                 src={require("../public/videos/video.mp4")}
// //                 autoPlay
// //                 // muted
// //                 loop
// //                 className={styles.video}
// //             />
// //         </main>
// //     );
// // }



// import React, { useRef, useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import styles from './page.module.css';

// export default function VideoPlayer() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5 // Adjust this threshold as needed
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     // Video is now visible, play it
//                     setIsPlaying(true);
//                 } else {
//                     // Video is not visible, pause it
//                     setIsPlaying(false);
//                 }
//             });
//         }, options);

//         observer.observe(videoRef.current);

//         return () => {
//             observer.unobserve(videoRef.current);
//         };
//     }, []);

//     return (
//         <main className={styles.main}>
//             <div className={styles.contents}>
//                 <div className={styles.buttons}>
//                     <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
//                         <button>Youtube channel</button>
//                     </a>
//                 </div>
//             </div>
//             <ReactPlayer
//                 ref={videoRef}
//                 url={require('../public/videos/video.mp4')}
//                 playing={isPlaying}
//                 loop={true}
//                 className={styles.video}
//                 width="100%"
//                 height="100%"
//                 controls={true}
//                 playbackRateControls={true} // Enable playback rate control
//                 volume={0.8} // Set default volume
//                 onPause={() => setIsPlaying(false)}
//                 onPlay={() => setIsPlaying(true)}
//             />
//         </main>
//     );
// }