import { useInView } from 'react-intersection-observer';

export default function AnimateWords({string="", averageTimeGap=0.1, easeOutSmooth=true, initialDelay=1}){
    
    let increment = initialDelay;

    const { ref, inView } = useInView({
        threshold: 0.8
      });    

    if(!string.length) return <span></span>;

    let alphabets=string.split("");

    return<span>
        {alphabets.map((element, index)=>{
           
           increment += averageTimeGap;

           return(<span key={"Word"+index} ref={ref} style={{ opacity: inView ? 1 : 0, transition: easeOutSmooth ? `opacity ${increment}s ease-in` : "opacity 0.5s ease-out" }}>{element}</span>)
        })}
    </span>
}