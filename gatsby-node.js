const path = require('path')

// Luodaan "koneellisesti" kaikista queryyn osuvista markdown filuista staattiset sivut
// Käytetään pohjana template/post templatea
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.js')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
            },
          })
        })
      })
    )
  })
}
