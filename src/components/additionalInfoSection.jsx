import AnimateWords from "./animateWords"

export default function AdditionalInformationSection({heading="", subHeading="", discription="", buttonText="" , link="", }){

    return (
        <div className="w-100 bg-white py-24 px-3 text-center darkGreyText">

        <div className="w-full">
          <h1 className="font-extrabold text-4xl mb-2">
          <AnimateWords string='Why Am I A Developer?' averageTimeGap={0.1} initialDelay={1}/>
            </h1>
          <h6 className="font-bold text-2xl">I'm a problem-solver at heart, and I love finding creative solutions to everyday challenges.</h6>
          <div className="w-full">
            <h6 className="font-semibold text-xl">By learning to code, I can create my own small software solutions that make my life easier and it's kind of cheap when you know how to code. It's a win-win!</h6>
          </div>
        </div>


  </div>
    )

}