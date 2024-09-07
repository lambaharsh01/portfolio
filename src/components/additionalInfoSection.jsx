import AnimateWords from "./animateWords"

export default function AdditionalInformationSection({heading="", subHeading="", discription="", buttonText="" , link="", }){

    return (
        <div className="w-100 bg-white py-24 px-3 text-center darkGreyText">

        <div className="w-full">
          <h1 className="font-extrabold text-4xl mb-2">
          <AnimateWords string={heading} averageTimeGap={0.05} initialDelay={0}/>
            </h1>
          <h6 className="font-bold text-2xl">{subHeading}</h6>
          <div className="w-full">
            <h6 className="font-semibold text-xl">{discription}</h6>
          </div>
        </div>


  </div>
    )

}