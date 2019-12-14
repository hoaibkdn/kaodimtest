import React, { memo } from 'react'
import Header from './../../../common/Header'
import { ButtonLink } from './../../../common/Button'
import { Layout } from './../../../themes'
import Box from './../../profile/components/Box'

const Home = memo(() => (
  <>
    <Header />
    <Layout.SmallBox>
      <Layout.Center>
        <Box
          className="m-t-50"
          padding={40}
          noBorder
        >
          <ButtonLink to="/form" title="Form" />
          <div className="m-t-10">
            <ButtonLink to="/profile" title="Profile" />
          </div>
        </Box>
      </Layout.Center>
    </Layout.SmallBox>
  </>
))

export default Home
