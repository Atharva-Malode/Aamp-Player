/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $title: String!
    $artist: String!
    $album: String!
    $duration: Int!
    $url: String!
  ) {
    createSong(
      title: $title
      artist: $artist
      album: $album
      duration: $duration
      url: $url
    ) {
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
export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist($name: String!, $description: String) {
    createPlaylist(name: $name, description: $description) {
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
export const addSongToPlaylist = /* GraphQL */ `
  mutation AddSongToPlaylist($playlistId: ID!, $songId: ID!) {
    addSongToPlaylist(playlistId: $playlistId, songId: $songId) {
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
export const removeSongFromPlaylist = /* GraphQL */ `
  mutation RemoveSongFromPlaylist($playlistId: ID!, $songId: ID!) {
    removeSongFromPlaylist(playlistId: $playlistId, songId: $songId) {
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
export const addUserToFavorites = /* GraphQL */ `
  mutation AddUserToFavorites($userId: ID!, $songId: ID!) {
    addUserToFavorites(userId: $userId, songId: $songId) {
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
export const removeUserFromFavorites = /* GraphQL */ `
  mutation RemoveUserFromFavorites($userId: ID!, $songId: ID!) {
    removeUserFromFavorites(userId: $userId, songId: $songId) {
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
