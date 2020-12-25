import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import styled from "styled-components"
import Heart from "../images/heart.svg"
import { truncateString } from "../utils"

const GramWrapper = styled.div`
  background: #111;
  color: #fefefe;
  margin: 0 auto;
  padding: 3rem 0.5rem 5rem;
  text-align: center;
  h2 {
    margin-bottom: 1rem;
  }
  a.instalink {
    border-bottom: 3px solid #c32a24;
    color: #fefefe;
    font-size: 1.25rem;
    text-decoration: none;
    transition: color 400ms ease-in;
    &:hover {
      color: #c32a24;
      transition: color 400ms ease-in;
    }
  }
`

const Grid = styled.div`
  margin: 2rem 20px 5rem 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`

const Title = styled.div`
  color: white;
  font-weight: 300;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: translateY(-45px);
  transition: all 0.4s ease 0s;
  opacity: 0;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  color: white;
  transform: translateY(45px);
  opacity: 0;
  transition: all 0.4s ease 0s;
`

const Item = styled.a`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
    ${Bottom} {
      transform: translateY(0);
      opacity: 1;
    }
    ${Title} {
      transform: translateY(0);
      opacity: 1;
    }
    box-shadow: 0 3px 5px 1px rgba(42, 42, 42, 0.4);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 1.25;
  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.1;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`

const HeartIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin: -5px 0;
  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramQuery {
        instagram: allInstaNode(
          sort: { fields: timestamp, order: DESC }
          limit: 20
        ) {
          edges {
            node {
              caption
              id
              timestamp
              likes
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <GramWrapper>
        <h2>Follow us on Instagram!</h2>
        <a className="instalink" href="https://instagram.com/professionaldogladies">
          @professionaldogladies
        </a>
        <Grid>
          {data.instagram.edges.map(({ node }) => {
            const pic = node.localFile.childImageSharp.fluid
            const title = node.caption.split("#")[0]
            const date = new Date(node.timestamp * 1000)
            const formattedDate = moment(date).format("MMMM DD")
            return (
              <Item
                href={`https://www.instagram.com/p/${node.id}/`}
                key={node.id}
              >
                <Overlay />
                <Img fluid={pic} alt={title} />
                <Content>
                  <Bottom>
                    <span>
                      <HeartIcon src={Heart} alt="Heart" /> {node.likes}
                    </span>
                    <span>{`${formattedDate}`}</span>
                  </Bottom>
                  <Title>{truncateString(title, 200)}</Title>
                </Content>
              </Item>
            )
          })}
        </Grid>
      </GramWrapper>
    )}
  />
)

export default Instagram
