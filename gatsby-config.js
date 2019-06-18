require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pg9a381fka8t`,
        accessToken: `Vu11vxLVT3g8Zoa_aBERVAaBnx4RddayajuZAyCMneU`,
        downloadLocal: true,
      },
    },
  ],
}
