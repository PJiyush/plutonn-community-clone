import React from 'react'

function PopularFollowingSection(props) {
    const data=[
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"},
        {"image":"","id":"absc@123","name":"Piyush Jhamnani"}
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