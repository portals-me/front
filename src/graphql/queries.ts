// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUserByName = `query GetUserByName($name: String!) {
  getUserByName(name: $name) {
    id
    name
    picture
    display_name
    is_following
    followings
    followers
  }
}
`;
export const getUserMoreByName = `query GetUserMoreByName($name: String!) {
  getUserMoreByName(name: $name) {
    id
    name
    picture
    display_name
    is_following
    followings
    followers
  }
}
`;
export const getPostSummary = `query GetPostSummary($id: ID!) {
  getPostSummary(id: $id) {
    id
    title
    description
    updated_at
    created_at
    entity_type
    entity {
      ... on Share {
        format
        url
      }
      ... on Article {
        filetype
        s3path
      }
    }
    owner
    owner_user {
      id
      name
      picture
      display_name
      is_following
      followings
      followers
    }
  }
}
`;
export const listPostSummary = `query ListPostSummary($owner: String) {
  listPostSummary(owner: $owner) {
    id
    title
    description
    updated_at
    created_at
    entity_type
    entity {
      ... on Share {
        format
        url
      }
      ... on Article {
        filetype
        s3path
      }
    }
    owner
    owner_user {
      id
      name
      picture
      display_name
      is_following
      followings
      followers
    }
  }
}
`;
export const fetchTimeline = `query FetchTimeline($since: Float) {
  fetchTimeline(since: $since) {
    id
    title
    description
    updated_at
    created_at
    entity_type
    entity {
      ... on Share {
        format
        url
      }
      ... on Article {
        filetype
        s3path
      }
    }
    owner
    owner_user {
      id
      name
      picture
      display_name
      is_following
      followings
      followers
    }
  }
}
`;
