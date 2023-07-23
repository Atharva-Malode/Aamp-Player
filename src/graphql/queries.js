/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      artist
      album
      duration
      url
      __typename
    }
  }
`;
export const getAllSongs = /* GraphQL */ `
  query GetAllSongs {
    getAllSongs {
      id
      title
      artist
      album
      duration
      url
      __typename
    }
  }
`;
export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
      id
      name
      description
      songs {
        id
        title
        artist
        album
        duration
        url
        __typename
      }
      owner
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      playlists {
        id
        name
        description
        songs {
          id
          title
          artist
          album
          duration
          url
          __typename
        }
        owner
        __typename
      }
      favorites {
        id
        title
        artist
        album
        duration
        url
        __typename
      }
      __typename
    }
  }
`;
