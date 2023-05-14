import { gql } from "@apollo/client";

export const ALL_PODCASTS = gql`
  query AllPodcasts(
    $offset: Int, $before: String,
    $after: String, $first: Int,
    $last: Int, $id: Float, $title_Icontains: String,
    $title_Istartswith: String, $title: String
  ) {
    podcasts: allPodcasts(
      offset: $offset, before: $before,
      after: $after, first: $first,
      last: $last, id: $id,
      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,
      title: $title
    ) {
      edges {
        node {
          podcastId
          title
          description
          listens
          audio {
            url
            fileId
            description
          }
          coverPhoto {
            url
            description
            imageId
          }
          podcastId
          guests {
            guestId
            name
          }
          hosts {
            hostId
            user {
              fullName
              id
            }
          }
        }
      }
    }
  }
`

export const POPULAR_POSTS = gql`
  query PopularPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {
    posts: popularPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {
      edges {
        cursor
        node {
          author {
            fullName
            profile {
              image {
                url
                description
                imageId
              }
              profileId
            }
          }
          title
          abstract
          body
          readLength
          dateAdded
          coverPhoto {
            url
            description
            imageId
          }
          postId
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`

export const GET_POST_BY_ID = gql`
  query GetPostById($postId: ID!) {
    post: getPostById(postId: $postId) {
      id
      author {
        fullName
        profile {
          image {
            url
            description
            imageId
          }
        }
      }
      title
      abstract
      body
      views
      likes
      dislikes
      readLength
      dateAdded
      coverPhoto {
        url
        description
        imageId
      }
      postId
    }
  }
`

export const ALL_OPPORTUNITIES = gql`
 query Opportunities(
    $category: String,
    $categoryTitle: String, 
    $categoryTitleIstartswith: String, 
    $categoryTitleIcontains: String) {
    opportunities(
      category: $category,
      category_Title: $categoryTitle, 
      category_Title_Istartswith: $categoryTitleIstartswith, 
      category_Title_Icontains: $categoryTitleIcontains) {
      edges {
        node {
          category {
            title
          }
          abstract
          lastUpdated
          opportunityId
          title
        }
      }
    }
  }
`

export const ALL_TAGS = gql`
  query Tags($category: String, $categoryIexact: String) {
    tags(category: $category, category_Iexact: $categoryIexact) {
      edges {
        node {
          title
          tagId
        }
      }
    }
  }
`

export const OPPORTUNITY = gql`
    query Opportunity($opportunityId: ID!) {
      opportunity(opportunityId: $opportunityId) {
        title
        category {
          title
          category
        }
        opportunityId
        lastUpdated
        abstract
        content
      }
    }
`
