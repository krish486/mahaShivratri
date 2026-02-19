import { useEffect } from "react";
import gsap from "gsap";

const Background = ({ elem }) => {

    useEffect(() => {
        const container = elem.current;

        function createStar() {
            const star = document.createElement("div");

            star.innerHTML = "★";
            star.style.position = "absolute";
            star.style.color = "white";
            star.style.fontSize = gsap.utils.random(10, 22) + "px";
            star.style.left = gsap.utils.random(0, 100) + "%";
            star.style.top = gsap.utils.random(0, 100) + "%";
            star.style.opacity = 0;

            container.appendChild(star);

            gsap.timeline({
                onComplete: () => star.remove()
            })
                .to(star, {
                    opacity: 3,
                    duration: 0.5
                })
                .to(star, {
                    opacity: 0.3,
                    duration: 0.6,
                    yoyo: true,
                    repeat: 2
                })
                .to(star, {
                    opacity: 0,
                    duration: 0.5
                });
        }

        const interval = setInterval(() => {
            createStar();
        }, 100);

        return () => clearInterval(interval);

    }, [elem]);

    return null;
}

export default Background;