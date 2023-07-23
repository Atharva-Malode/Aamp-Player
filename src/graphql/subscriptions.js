/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onSongAdded = /* GraphQL */ `
  subscription OnSongAdded {
    onSongAdded {
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
export const onPlaylistUpdated = /* GraphQL */ `
  subscription OnPlaylistUpdated($playlistId: ID!) {
    onPlaylistUpdated(playlistId: $playlistId) {
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
export const onUserUpdated = /* GraphQL */ `
  subscription OnUserUpdated($userId: ID!) {
    onUserUpdated(userId: $userId) {
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
