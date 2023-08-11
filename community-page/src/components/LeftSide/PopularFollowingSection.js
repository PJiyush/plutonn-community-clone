import React from 'react'

function PopularFollowingSection() {
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
    <div className='innPopularFollowingSection' >
        <div className="peopleSection">
            {data.map((people)=>(
                <div className="innPeopleSection">
                    <div className="forimage"> <img src={people.image} alt="" /> </div>
                    <div className="fornameid">
                        <div className="forid">{people.id}</div>
                        <div className="forname">{people.name}</div>
                    </div>
                    <button className='folloBtn' >Follow</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularFollowingSection