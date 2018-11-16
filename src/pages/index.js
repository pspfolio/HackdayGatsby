import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/layout'
import PostHeader from '../components/style/PostHeader';
import Img from "gatsby-image"

const PostPreview = styled.div`
  width: 400px;
  border-radius: 4px;
  margin: 1rem;
`

const ImageThumbnail = styled(Img)`
  border-radius: 4px;
`

const LinkContainer = styled(Link)`
  text-decoration: none;
`

const CardTitle = styled.h3`
  font-family: 'Open Sans';
  font-size: 20px;
  color: #373737;
  margin-bottom: .5rem;
`

const MetaContainer = styled.div`
  display: flex;
`

const MetaText = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  color: #AAAAAA;
  margin-right: 1rem; 
  padding: .5rem .5rem .5rem 0;
  line-height: 0;
  margin-bottom: 8px;
`

const Snippet = styled.p`
  line-height: 24px;
`

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
`

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <PostHeader>Frontend blog with React twist</PostHeader>
      <PostList>
      {edges.map(({ node }) => (
        <PostPreview key={node.id}>
        <LinkContainer to={node.frontmatter.path}>
          <ImageThumbnail fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
          <MetaContainer>
          <MetaText>{node.frontmatter.date}</MetaText>
          <MetaText>{node.frontmatter.reactVersion}</MetaText>
          </MetaContainer>
            <CardTitle>{node.frontmatter.title} </CardTitle>
            <Snippet>{node.frontmatter.snippet}</Snippet>
        </LinkContainer>
        </PostPreview>
      ))}
      </PostList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            reactVersion
            snippet
            date(formatString: "DD.MM.YYYY")
            thumbnail {
              publicURL
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
