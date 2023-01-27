import type {
  CustomUserCategory,
  HostTypeConnection,
  Maybe, PostTypeConnection } from "@gql/codegen/graphql";

export const dummyPosts: { posts: Maybe<PostTypeConnection> } = {
  posts: {
    edges: [
      {
        cursor: "",
        node: {
          id: Math.random().toString(),
          body: "",
          dateAdded: new Date().toString(),
          title: "The Importance of Soil Testing in Construction Projects",
          dislikes: 0,
          lastUpdated: new Date().toString(),
          postId: Math.random().toString().split(".")[1],
          likes: 0,
          readLength: 20,
          views: 0,
          abstract: `Soil testing is a crucial step in the construction process,
            as it helps to determine the properties and characteristics of the
            soil on which a building or structure will be built. Without proper
            soil testing, the foundation of a building or structure may not be
            able to support the weight of the structure, leading to potential failure or collapse.`,
          coverPhoto: "https://westernresourcesinc.com/wp-content/uploads/2020/02/types-of-soil-test-for-building-construction.jpg",
          author: {
            fullName: "Ezekiel Victor",
            email: "demo@dev.com",
            category: {} as CustomUserCategory,
            commentSet: [],
            hostSet: {} as HostTypeConnection,
            postSet: {} as PostTypeConnection,
            id: Math.random().toString()
          }
        }
      },
      {
        cursor: "",
        node: {
          id: Math.random().toString(),
          body: "",
          dateAdded: new Date().toString(),
          title: "Understanding and Managing Soil Erosion",
          dislikes: 0,
          lastUpdated: new Date().toString(),
          likes: 0,
          readLength: 20,
          views: 0,
          abstract: `Soil erosion is the process by which soil is worn away by
            natural forces such as wind and water. This can lead to a loss of
            fertile land, damage to infrastructure, and increased risk of flooding.
            Soil erosion can be caused by a variety of factors, including rainfall,
            wind, and human activities like construction, logging, and over-grazing.`,
          coverPhoto: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f38449d949b744a8ae5cb79029f8165d?type=webp",
          author: {
            fullName: "Ezekiel Victor",
            email: "demo@dev.com",
            category: {} as CustomUserCategory,
            commentSet: [],
            hostSet: {} as HostTypeConnection,
            postSet: {} as PostTypeConnection,
            id: Math.random().toString()
          }
        }
      },
      {
        cursor: "",
        node: {
          id: Math.random().toString(),
          body: "",
          dateAdded: new Date().toString(),
          title: "The Role of Geotechnical Engineers in Natural Disaster Preparedness and Response",
          dislikes: 0,
          lastUpdated: new Date().toString(),
          likes: 0,
          readLength: 20,
          views: 0,
          abstract: `Geotechnical engineers play a critical role in natural disaster preparedness and
            response. They assess the potential impact of natural disasters such as earthquakes,
            floods, and landslides on the built environment, and make recommendations for mitigation and recovery.`,
          coverPhoto: "https://virtuosity.bentley.com/wp-content/uploads/2021/07/Geotechnical-Engineering-Software-560x350-1.jpg",
          author: {
            fullName: "Ezekiel Victor",
            email: "demo@dev.com",
            category: {} as CustomUserCategory,
            commentSet: [],
            hostSet: {} as HostTypeConnection,
            postSet: {} as PostTypeConnection,
            id: Math.random().toString()
          }
        }
      },
      {
        cursor: "",
        node: {
          id: Math.random().toString(),
          body: "",
          dateAdded: new Date().toString(),
          title: "Innovations in Foundation Design and Construction",
          dislikes: 0,
          lastUpdated: new Date().toString(),
          likes: 0,
          readLength: 20,
          views: 0,
          abstract: `The foundation is the most important part of any
            building or structure. It is responsible for supporting
            the weight of the structure and providing a stable base
            for the building. The design of the foundation must be
            able to withstand the loads imposed by the structure,
            as well as the forces of nature such as earthquakes, winds, and floods.`,
          coverPhoto: "https://i0.wp.com/theconstructor.org/wp-content/uploads/2017/10/building-foundations.jpg?resize=660%2C418&ssl=1",
          author: {
            fullName: "Ezekiel Victor",
            email: "demo@dev.com",
            category: {} as CustomUserCategory,
            commentSet: [],
            hostSet: {} as HostTypeConnection,
            postSet: {} as PostTypeConnection,
            id: Math.random().toString()
          }
        }
      }
    ],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    }
  }
}
