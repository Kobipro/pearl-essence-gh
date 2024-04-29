'use client'
import React, { useRef, useEffect } from 'react';
import styles from './page.module.css';

export default function VideoPlayer() {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Video is now visible, play it
                    if (videoRef.current) {
                        videoRef.current.play();
                    }
                } else {
                    // Video is not visible, pause it
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            });
        }, options);

        observer.observe(videoRef.current);

        return () => {
            observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.contents}>
                <div className={styles.buttons}>
                 <a href="https://youtube.com/@PearlEssenceGh?si=_SmUeABKEYUd_WCE">
                    <button>Youtube channel</button>
                  </a>   
                </div>
            </div>
            <video
                ref={videoRef}
                src={require('../public/videos/video.mp4')}
                autoPlay
                loop
                className={styles.video}
            />
        </main>
    );
}





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




