import React, { PureComponent } from 'react'
import ProfileHeader from './ProfileHeader'
import GalleryBox from './Gallery/GalleryBox'
import Box from './Box'
import VerticalText from './VertialText'
import RatingAndReviewsBox from './RatingAndReviews/RatingAndReviewsBox'
import NeedServiceBox from './NeedService/NeedServiceBox'
import ContactBox from './Contact/ContactBox'
import RelatedServiceBox from './RelatedServices/RelatedServiceBox'
import Header from './../../../common/Header'

import { Images, Layout } from './../../../themes'

import {
  GroupMain,
  GroupRightSide
} from './../styles/ProfileScreenStyled'

class ProfileScreen extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="m-t-10">
          <div className="container m-auto">
            <ProfileHeader />
            <Layout.Flex>
              <GroupMain>
                <Box>
                  <VerticalText
                    title='About'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in '
                  />
                </Box>
                <GalleryBox listImgs={[Images.gallery1, Images.gallery2, Images.gallery1, Images.gallery1, Images.gallery2, Images.gallery1, Images.gallery2]} />
                <RatingAndReviewsBox />
              </GroupMain>
              <GroupRightSide>
                <NeedServiceBox
                  benefits={['Free insurance coverage', 'Enjoy re-service or your money back if unsatisfactory', 'Lowest price guaranteed']}
                />
                <ContactBox
                  contact={{
                    contactPerson: 'Ahmad Faris',
                    companyAddress: 'Mutiara Serdang, 6-31, Jalan Serdang Raya, 43300, Seri Kembangan, Selangor',
                    registrationNo: '002503879-H'
                  }}
                />
                <RelatedServiceBox
                  services={[{
                    title: 'Aircond Services',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing ",
                    photo: Images.gallery1
                  }, {
                    title: 'Plumbing Services',
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing ",
                    photo: Images.gallery2
                  }]}
                />
              </GroupRightSide>
            </Layout.Flex>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileScreen
