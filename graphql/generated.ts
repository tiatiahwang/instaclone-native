import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  payload: Scalars['String'];
  photo: Photo;
  updatedAt: Scalars['String'];
  user: User;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['String'];
  hashtag: Scalars['String'];
  id: Scalars['Int'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalPhotos: Scalars['Int'];
  updatedAt: Scalars['String'];
};


export type HashtagPhotosArgs = {
  page: Scalars['Int'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  photo: Photo;
  updatedAt: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: MutationResponse;
  createComment: MutationResponse;
  deleteComment: MutationResponse;
  deletePhoto: MutationResponse;
  editComment: MutationResponse;
  editPhoto: MutationResponse;
  editProfile: MutationResponse;
  followUser: MutationResponse;
  login: LoginResult;
  toggleLike: MutationResponse;
  unfollowUser: MutationResponse;
  uploadPhoto?: Maybe<Photo>;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  payload: Scalars['String'];
  photoId: Scalars['Int'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int'];
};


export type MutationEditCommentArgs = {
  id: Scalars['Int'];
  payload: Scalars['String'];
};


export type MutationEditPhotoArgs = {
  caption: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationEditProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};


export type MutationUploadPhotoArgs = {
  caption?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ok: Scalars['Boolean'];
};

export type Photo = {
  __typename?: 'Photo';
  caption?: Maybe<Scalars['String']>;
  commentNumber: Scalars['Int'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String'];
  file: Scalars['String'];
  hashtags?: Maybe<Array<Maybe<Hashtag>>>;
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  likes: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchPhotos?: Maybe<Array<Maybe<Photo>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeFeed?: Maybe<Array<Maybe<Photo>>>;
  seeFollowers: SeeFollowersResult;
  seeFollowing: SeeFollowingResult;
  seeHashtag?: Maybe<Hashtag>;
  seePhoto?: Maybe<Photo>;
  seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
  seePhotoLikes?: Maybe<Array<Maybe<User>>>;
  seeProfile?: Maybe<User>;
};


export type QuerySearchPhotosArgs = {
  keyword: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
  page: Scalars['Int'];
};


export type QuerySeeFeedArgs = {
  offset: Scalars['Int'];
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int'];
  username: Scalars['String'];
};


export type QuerySeeFollowingArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int'];
};


export type QuerySeePhotoCommentsArgs = {
  id: Scalars['Int'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int'];
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};

export type SeeFollowersResult = {
  __typename?: 'SeeFollowersResult';
  error?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  username: Scalars['String'];
};

export type SeeFollowingResult = {
  __typename?: 'seeFollowingResult';
  error?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<User>>>;
  ok: Scalars['Boolean'];
};

export type PhotoFragmentFragment = { __typename?: 'Photo', id: number, file: string, likes: number, commentNumber: number };

export type CommentFragmentFragment = { __typename?: 'Comment', id: number, payload: string, isMine: boolean, createdAt: string, user: { __typename?: 'User', username: string, avatar?: string | null } };

export type UserFragmentFragment = { __typename?: 'User', id: number, username: string, avatar?: string | null, isFollowing: boolean, isMe: boolean };

export type FeedFragmentFragment = { __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, commentNumber: number, user: { __typename?: 'User', id: number, username: string, avatar?: string | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', ok: boolean, token?: string | null, error?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type ToggleLikeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ToggleLikeMutation = { __typename?: 'Mutation', toggleLike: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type FollowUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type UnfollowUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollowUser: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type UploadPhotoMutationVariables = Exact<{
  file: Scalars['Upload'];
  caption?: InputMaybe<Scalars['String']>;
}>;


export type UploadPhotoMutation = { __typename?: 'Mutation', uploadPhoto?: { __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, commentNumber: number, user: { __typename?: 'User', id: number, username: string, avatar?: string | null } } | null };

export type SeeFeedQueryVariables = Exact<{
  offset: Scalars['Int'];
}>;


export type SeeFeedQuery = { __typename?: 'Query', seeFeed?: Array<{ __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, commentNumber: number, user: { __typename?: 'User', id: number, username: string, avatar?: string | null } } | null> | null };

export type SeeLikesQueryVariables = Exact<{
  seePhotoLikesId: Scalars['Int'];
}>;


export type SeeLikesQuery = { __typename?: 'Query', seePhotoLikes?: Array<{ __typename?: 'User', id: number, username: string, avatar?: string | null, isFollowing: boolean, isMe: boolean } | null> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, avatar?: string | null, totalFollowers: number, totalFollowing: number } | null };

export type SearchPhotosQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type SearchPhotosQuery = { __typename?: 'Query', searchPhotos?: Array<{ __typename?: 'Photo', id: number, file: string } | null> | null };

export type SeePhotoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SeePhotoQuery = { __typename?: 'Query', seePhoto?: { __typename?: 'Photo', caption?: string | null, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, commentNumber: number, user: { __typename?: 'User', id: number, username: string, avatar?: string | null } } | null };

export const CommentFragmentFragmentDoc = gql`
    fragment CommentFragment on Comment {
  id
  payload
  isMine
  createdAt
  user {
    username
    avatar
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  avatar
  isFollowing
  isMe
}
    `;
export const PhotoFragmentFragmentDoc = gql`
    fragment PhotoFragment on Photo {
  id
  file
  likes
  commentNumber
}
    `;
export const FeedFragmentFragmentDoc = gql`
    fragment FeedFragment on Photo {
  ...PhotoFragment
  user {
    id
    username
    avatar
  }
  caption
  createdAt
  isMine
  isLiked
}
    ${PhotoFragmentFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($firstName: String!, $lastName: String, $username: String!, $email: String!, $password: String!) {
  createAccount(
    firstName: $firstName
    lastName: $lastName
    username: $username
    email: $email
    password: $password
  ) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation toggleLike($id: Int!) {
  toggleLike(id: $id) {
    ok
    error
  }
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const FollowUserDocument = gql`
    mutation followUser($username: String!) {
  followUser(username: $username) {
    ok
    error
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = gql`
    mutation unfollowUser($username: String!) {
  unfollowUser(username: $username) {
    ok
    error
  }
}
    `;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUnfollowUserMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, options);
      }
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const UploadPhotoDocument = gql`
    mutation uploadPhoto($file: Upload!, $caption: String) {
  uploadPhoto(file: $file, caption: $caption) {
    ...FeedFragment
  }
}
    ${FeedFragmentFragmentDoc}`;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      file: // value for 'file'
 *      caption: // value for 'caption'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, options);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const SeeFeedDocument = gql`
    query seeFeed($offset: Int!) {
  seeFeed(offset: $offset) {
    ...FeedFragment
  }
}
    ${FeedFragmentFragmentDoc}`;

/**
 * __useSeeFeedQuery__
 *
 * To run a query within a React component, call `useSeeFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeFeedQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSeeFeedQuery(baseOptions: Apollo.QueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeFeedQuery, SeeFeedQueryVariables>(SeeFeedDocument, options);
      }
export function useSeeFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeFeedQuery, SeeFeedQueryVariables>(SeeFeedDocument, options);
        }
export type SeeFeedQueryHookResult = ReturnType<typeof useSeeFeedQuery>;
export type SeeFeedLazyQueryHookResult = ReturnType<typeof useSeeFeedLazyQuery>;
export type SeeFeedQueryResult = Apollo.QueryResult<SeeFeedQuery, SeeFeedQueryVariables>;
export const SeeLikesDocument = gql`
    query seeLikes($seePhotoLikesId: Int!) {
  seePhotoLikes(id: $seePhotoLikesId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useSeeLikesQuery__
 *
 * To run a query within a React component, call `useSeeLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeLikesQuery({
 *   variables: {
 *      seePhotoLikesId: // value for 'seePhotoLikesId'
 *   },
 * });
 */
export function useSeeLikesQuery(baseOptions: Apollo.QueryHookOptions<SeeLikesQuery, SeeLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeLikesQuery, SeeLikesQueryVariables>(SeeLikesDocument, options);
      }
export function useSeeLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeLikesQuery, SeeLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeLikesQuery, SeeLikesQueryVariables>(SeeLikesDocument, options);
        }
export type SeeLikesQueryHookResult = ReturnType<typeof useSeeLikesQuery>;
export type SeeLikesLazyQueryHookResult = ReturnType<typeof useSeeLikesLazyQuery>;
export type SeeLikesQueryResult = Apollo.QueryResult<SeeLikesQuery, SeeLikesQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    username
    avatar
    totalFollowers
    totalFollowing
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SearchPhotosDocument = gql`
    query searchPhotos($keyword: String!) {
  searchPhotos(keyword: $keyword) {
    id
    file
  }
}
    `;

/**
 * __useSearchPhotosQuery__
 *
 * To run a query within a React component, call `useSearchPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPhotosQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchPhotosQuery(baseOptions: Apollo.QueryHookOptions<SearchPhotosQuery, SearchPhotosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPhotosQuery, SearchPhotosQueryVariables>(SearchPhotosDocument, options);
      }
export function useSearchPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPhotosQuery, SearchPhotosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPhotosQuery, SearchPhotosQueryVariables>(SearchPhotosDocument, options);
        }
export type SearchPhotosQueryHookResult = ReturnType<typeof useSearchPhotosQuery>;
export type SearchPhotosLazyQueryHookResult = ReturnType<typeof useSearchPhotosLazyQuery>;
export type SearchPhotosQueryResult = Apollo.QueryResult<SearchPhotosQuery, SearchPhotosQueryVariables>;
export const SeePhotoDocument = gql`
    query seePhoto($id: Int!) {
  seePhoto(id: $id) {
    ...PhotoFragment
    user {
      id
      username
      avatar
    }
    caption
    isMine
    isLiked
  }
}
    ${PhotoFragmentFragmentDoc}`;

/**
 * __useSeePhotoQuery__
 *
 * To run a query within a React component, call `useSeePhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeePhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeePhotoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeePhotoQuery(baseOptions: Apollo.QueryHookOptions<SeePhotoQuery, SeePhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeePhotoQuery, SeePhotoQueryVariables>(SeePhotoDocument, options);
      }
export function useSeePhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeePhotoQuery, SeePhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeePhotoQuery, SeePhotoQueryVariables>(SeePhotoDocument, options);
        }
export type SeePhotoQueryHookResult = ReturnType<typeof useSeePhotoQuery>;
export type SeePhotoLazyQueryHookResult = ReturnType<typeof useSeePhotoLazyQuery>;
export type SeePhotoQueryResult = Apollo.QueryResult<SeePhotoQuery, SeePhotoQueryVariables>;