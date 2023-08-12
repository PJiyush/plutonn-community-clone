import React from 'react'
import image2 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-min-an-1153334.jpg'
import image3 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-chloe-1043471.jpg'
import image4 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-davide-de-giovanni-2340978.jpg'

function PopularFollowingSection(props) {
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
                    <div className="fornameid">
                        <div className="forid">{people.id}</div>
                        <div className="forname">{people.name}</div>
                    </div>
                    <button className='folloBtn' style={props.theme.theme} >Follow</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularFollowingSection