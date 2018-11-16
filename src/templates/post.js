import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import PostHeader from '../components/style/PostHeader';
import facebook from '../content/icons/facebook.png';
import twitter from '../content/icons/twitter.png';

const MetaInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: #E95656;
    width: 56px;
  }
`

const MetaText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text.subtitle};
  margin-left: 1rem;
`

const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

const SocialMediaIcon = styled.img`
  padding: 1rem;
`

const Post = (props) => {
  const post = props.data.markdownRemark
  const { title, date, reactVersion } = post.frontmatter
  const html = post.html

  return (
    <Layout>
      <PostHeader>{title}</PostHeader>
      <MetaInfoContainer>
        <MetaText>{date}</MetaText>
        <MetaText>{reactVersion}</MetaText>
      </MetaInfoContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ShareContainer>
        <SocialMediaIcon src={facebook} alt="facebook icon" />
        <SocialMediaIcon src={twitter} alt="twitter icon" />
      </ShareContainer>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title,
        reactVersion
      }
    }
  }
`

export default Post
