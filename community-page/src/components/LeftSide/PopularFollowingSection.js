import React, { useState } from 'react'
import image2 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-min-an-1153334.jpg'
import image3 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-chloe-1043471.jpg'
import image4 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-davide-de-giovanni-2340978.jpg'
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

function PopularFollowingSection(props) {
    const [comp,setComp] = useState(<AddIcon fontSize='small'/>);
    // write toggle function

    const toggle = ()=>{
        if (comp === <AddIcon fontSize='small'/>) {
            setComp(<CheckIcon/>)
          } else {
            setComp(<AddIcon fontSize='small'/>)
          }
    }

    const data=[
        {"image":image2,"id":"absc@123","name":"Piyush Jhamnani"},
        {"image":image3,"id":"absc@123","name":"Piyush Jhamnani"},
        {"image":image4,"id":"absc@123","name":"Piyush Jhamnani"},
        {"image":image2,"id":"absc@123","name":"Piyush Jhamnani"},
        {"image":image3,"id":"absc@123","name":"Piyush Jhamnani"},
        {"image":image4,"id":"absc@123","name":"Piyush Jhamnani"},
        
    ]
  return (
    <div className='innPopularFollowingSection' style={props.theme.theme} >
        <div className="peopleSection">
            {data.map((people)=>(
                <div className="innPeopleSection">
                    <div className="forimage"> <img src={people.image} alt="" /> </div>
                    <div className="fornameid" >
                        <div className="forid">{people.id}</div>
                        <div className="forname" style={{
                        fontSize:'0.8rem',
                        marginLeft:'-0.5rem',
                    }} >{people.name}</div>
                    </div>
                    <button className='folloBtn' style={{
                        fontSize:'0.8rem',
                        marginLeft:'-0.5rem',
                    }}
                    onClick={toggle}
                    > {comp} Follow</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularFollowingSection