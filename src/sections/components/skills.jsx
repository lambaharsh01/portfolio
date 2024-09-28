import { FiCheckCircle } from "react-icons/fi";

import skillsArray from "../../data/skills.json"

export default function Skills() {

    let array = skillsArray.map((e) => e.skill);
    const parentArray = [];
    
    let checkpointPerArray=array.length/4;

    let childArrayLength=Math.floor(checkpointPerArray);

    let leftOvers= ((checkpointPerArray - Math.floor(checkpointPerArray)) * 4);

    for(let i=0; i<4; i++){
        
        let childArray=[]
        let outerArrayElement= i*childArrayLength;
        for(let j=0; j < childArrayLength; j++){
            childArray.push(array[outerArrayElement + j])
        }
        parentArray.push(childArray);
    }

    let leftIndex= (4 * childArrayLength); 

    for(let i=0; i< leftOvers; i++){
        parentArray[i].push(array[leftIndex]);
        leftIndex++
    }

    console.log(parentArray)

    
    return (
            <div className="w-full grid">
              <div className="skills__area">

                <div className="w-100 row">
               
                    {parentArray.map((childElement, i) => (       
                        <div key={"parentElmenetSkills_"+i} className="skills__group col-6 col-sm-3">  
                    
                            {childElement.map((element, j) => (
                                <div key={"parentElmenetSkills_" + i + "_" + j} className="skills__data flex justify-center ">
                                    <span className="flex">
                                        <FiCheckCircle  className="text-green-600 me-3" /> <h3 className="skills__name mb-3">{element}</h3>
                                    </span>
                                </div>
                            ))}

                        </div>
                    ))}

                    
              
                    
                </div>
              </div>
            </div>
    )
}