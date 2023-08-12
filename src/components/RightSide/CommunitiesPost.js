import React from 'react'
// import image5 from 'D:/Projects/cipherSchoolAssignment/plutonn-community-clone/community-page/src/assets/images/pexels-jacob-colvin-1761279.jpg'
import image5 from '../images/pexels-jacob-colvin-1761279.jpg'
import CampaignIcon from '@mui/icons-material/Campaign';
function CommunitiesPost() {
  return (
    <div>
        <div className="currCommunity" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            cursor: 'pointer',
            }}>
            <div className="forImg">
                <img src={image5} alt="" />
            </div>
            <div className="forNameAndMember" style={{
                position: 'relative',
                left: '10rem',
            }}>
                <div className="nameOfComm">DSA Community</div>
                <div className="membersInComm" style={{
                    fontSize: '0.8rem',
                }}>162 Members</div>
            </div>
            <CampaignIcon style={{
                transform: 'scaleX(-1)',
                position: 'relative',
                top: '1rem',
                left: '-2rem',

            }} fontSize='medium' />
        </div>
    </div>
  )
}

export default CommunitiesPost