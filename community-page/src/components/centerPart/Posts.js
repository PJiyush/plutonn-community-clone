import React from 'react'
import image3 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-chloe-1043471.jpg'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
function Posts(props) {
  return (
    <div className='innPosts' style={props.theme.theme.theme} >
        <div className="innPeopleSection">
            <div className='wrapper'>
                <img src={image3} alt="" />
                <div className="fornameid">
                    <div className="forid">nfeknf</div>
                    <div className="forname">Piyush</div>
                </div>
            </div>
            <button className='folloBtn' >Follow</button>
        </div>
        <div className="contents">
            <div className="txtfield">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque delectus corrupti debitis, nostrum vel, sit, eos nisi minima ut aliquid nobis sunt nemo accusamus. Sunt placeat, aspernatur incidunt dignissimos deleniti cupiditate laborum ex, in officia porro vel eius aliquam dolores numquam nihil quia neque minima possimus a ut veritatis vero, sed fugit! Blanditiis voluptatibus nulla maxime, ipsum voluptate cumque corporis fugiat odit dicta neque dolor est debitis quia quasi! Quas excepturi eum error! Reprehenderit vero aspernatur maiores incidunt nihil, cum sed modi nesciunt ea neque?
                Dolores facere non aspernatur dolor velit magni alias perferendis temporibus culpa earum excepturi cum accusantium qui nam in repellendus ipsa recusandae, sapiente eius adipisci beatae tempora molestiae vitae dolorum? Adipisci aliquam deserunt sit, neque porro nisi culpa, quos asperiores consectetur ipsa, excepturi sequi facilis reprehenderit hic ipsum dicta autem veritatis inventore ab incidunt veniam non exercitationem beatae nesciunt. Cum dolor voluptatibus voluptatum at autem necessitatibus amet vitae, eos iusto! Assumenda consequatur adipisci, corrupti sunt facilis suscipit sit, rem neque illo pariatur facere iste quae, odio odit. Impedit non nihil ullam, rem ex quod atque recusandae voluptas maiores tenetur ad, incidunt error aperiam suscipit? 
                Aliquam quibusdam facere amet beatae, esse sapiente natus aspernatur quos porro consequatur. Molestiae tempora enim nesciunt ratione sit repudiandae soluta, repellendus eum praesentium voluptas non aliquam quod labore temporibus similique cum harum totam distinctio blanditiis, autem ex quos quam cupiditate. Praesentium ullam ad enim numquam quisquam corrupti vitae nulla iure tempora necessitatibus, ipsa sed eligendi error reiciendis? Animi eaque doloribus ea id commodi! Quod voluptas voluptates facere. Assumenda, quas?</div>
            </div>
            <div className="ContentImage"><img src="" alt="" /></div>
            <div className="ImportantIcons">
                <div className="cmnt"><ChatBubbleIcon/></div>
                <div className="react"><ThumbUpAltIcon/></div>
                <div className="Share"><ShareIcon/></div>
            </div>
            <hr />
    </div>
  )
}

export default Posts