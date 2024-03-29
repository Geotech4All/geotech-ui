export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  ExpectedErrorType: any;
  GenericScalar: any;
  Upload: any;
};

/**
 * Performs create and update activity on an `Address`.
 * To perform an update all you need to do is pass in the address `id`.
 */
export type AddressCreateUpdateMutation = {
  __typename?: 'AddressCreateUpdateMutation';
  address?: Maybe<AddressNode>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Address graphql object type */
export type AddressNode = {
  __typename?: 'AddressNode';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  dateAdded: Scalars['DateTime'];
  id: Scalars['ID'];
  lastUpdated: Scalars['DateTime'];
  state: Scalars['String'];
  zipCode: Scalars['String'];
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Handles create operarion for comments */
export type CommentCreateMutation = {
  __typename?: 'CommentCreateMutation';
  comment?: Maybe<CommentType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CommentType = {
  __typename?: 'CommentType';
  author?: Maybe<UserType>;
  dateAdded: Scalars['DateTime'];
  post: PostType;
};

export type CreateUpdateTagMutation = {
  __typename?: 'CreateUpdateTagMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<TagType>;
};

export enum CustomUserCategory {
  /** Lecturer */
  Le = 'LE',
  /** Student */
  St = 'ST'
}

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

/**
 * Performs create and update actions for an event.
 * To perform an update all you need to do is pass in the event `id`.
 */
export type EventCreateUpdateMutation = {
  __typename?: 'EventCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  event?: Maybe<EventType>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Performs create and update actions for an event image.
 * To perform an update all you need to do is pass in the event image `id`.
 */
export type EventImageCreateUpdateMutation = {
  __typename?: 'EventImageCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  eventImage?: Maybe<EventImageType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** EventImage graphql object type */
export type EventImageType = {
  __typename?: 'EventImageType';
  /** what's in this image */
  description?: Maybe<Scalars['String']>;
  event: EventType;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
};

/** Event graphql object type */
export type EventType = {
  __typename?: 'EventType';
  date?: Maybe<Scalars['Date']>;
  /** what's this event about */
  description: Scalars['String'];
  id: Scalars['ID'];
  organizer?: Maybe<OrganizationType>;
  title: Scalars['String'];
  venue?: Maybe<AddressNode>;
};

export type FileCreateUpdateMutation = {
  __typename?: 'FileCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  file?: Maybe<FileType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type FileDeleteMutation = {
  __typename?: 'FileDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum FileFoldersEnum {
  Podcast = 'PODCAST'
}

export type FileType = Node & {
  __typename?: 'FileType';
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['ID']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type FileTypeConnection = {
  __typename?: 'FileTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FileTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FileType` and its cursor. */
export type FileTypeEdge = {
  __typename?: 'FileTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FileType>;
};

/**
 * Performs create and update actions on a `Guest` object.
 * To perform an update all you need to do is pass in the guest `id`.
 */
export type GuestCreateUpdateMutation = {
  __typename?: 'GuestCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  guest?: Maybe<GuestType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Guest graphql object type */
export type GuestType = Node & {
  __typename?: 'GuestType';
  /** more information about this guest */
  description: Scalars['String'];
  guestId?: Maybe<Scalars['ID']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  /** The full name of the guest */
  name: Scalars['String'];
  organization?: Maybe<OrganizationType>;
};

export type GuestTypeConnection = {
  __typename?: 'GuestTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GuestTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GuestType` and its cursor. */
export type GuestTypeEdge = {
  __typename?: 'GuestTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<GuestType>;
};

export type HostType = Node & {
  __typename?: 'HostType';
  dateAdded: Scalars['DateTime'];
  hostId?: Maybe<Scalars['ID']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  podcast: PodcastType;
  user?: Maybe<UserType>;
};

export type HostTypeConnection = {
  __typename?: 'HostTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HostTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HostType` and its cursor. */
export type HostTypeEdge = {
  __typename?: 'HostTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<HostType>;
};

export type ImageCreateUpdateMutation = {
  __typename?: 'ImageCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  image?: Maybe<ImageType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ImageDeleteMutation = {
  __typename?: 'ImageDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum ImageFoldersEnum {
  Blog = 'BLOG',
  Opportunity = 'OPPORTUNITY',
  Podcast = 'PODCAST',
  Profile = 'PROFILE'
}

export type ImageType = Node & {
  __typename?: 'ImageType';
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  imageId?: Maybe<Scalars['ID']>;
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type ImageTypeConnection = {
  __typename?: 'ImageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ImageType` and its cursor. */
export type ImageTypeEdge = {
  __typename?: 'ImageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ImageType>;
};

export type IncreasePodcastListens = {
  __typename?: 'IncreasePodcastListens';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  podcast?: Maybe<PodcastType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /** Handles create operarion for comments */
  createComment?: Maybe<CommentCreateMutation>;
  /** Promote existing user to staff with certan permisions */
  createStaff?: Maybe<StaffCreateMutation>;
  /** Classified */
  createSuperUser?: Maybe<SuperUserCreateMutation>;
  /**
   * Performs create and update activity on an `Address`.
   * To perform an update all you need to do is pass in the address `id`.
   */
  createUpdateAddress?: Maybe<AddressCreateUpdateMutation>;
  /**
   * Performs create and update actions for an event.
   * To perform an update all you need to do is pass in the event `id`.
   */
  createUpdateEvent?: Maybe<EventCreateUpdateMutation>;
  /**
   * Performs create and update actions for an event image.
   * To perform an update all you need to do is pass in the event image `id`.
   */
  createUpdateEventImage?: Maybe<EventImageCreateUpdateMutation>;
  createUpdateFile?: Maybe<FileCreateUpdateMutation>;
  /**
   * Performs create and update actions on a `Guest` object.
   * To perform an update all you need to do is pass in the guest `id`.
   */
  createUpdateGuest?: Maybe<GuestCreateUpdateMutation>;
  createUpdateImage?: Maybe<ImageCreateUpdateMutation>;
  /** Create new or update existing opportunity */
  createUpdateOpportunity?: Maybe<OpportunityCreateUpdateMutation>;
  /**
   * Performs create and update activiies on an `Organization`.
   * To perform an update all you need to do is pass the organization `id`.
   */
  createUpdateOrganization?: Maybe<OrganizationCreateUpdateMutation>;
  /**
   * Performs create and update activity on `Podcast` object.
   * To perform an update, all you need to do is pass the podcast `id`.
   */
  createUpdatePodcast?: Maybe<PodcastCreateUpdateMutation>;
  /**
   * Performs create and update functionality on a blog postself.
   * To perform an update, you just need to pass in the blog `id`.
   */
  createUpdatePost?: Maybe<PostCreateUpdateMutation>;
  createUpdateTag?: Maybe<CreateUpdateTagMutation>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deleteFile?: Maybe<FileDeleteMutation>;
  deleteImage?: Maybe<ImageDeleteMutation>;
  /** Deletes a post with the specified id. */
  deletePost?: Maybe<PostDeleteMutation>;
  increasePodcastListens?: Maybe<IncreasePodcastListens>;
  /** Increases the view count on a post */
  increasePostViewCount?: Maybe<PostViewsIncreaseMutation>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /** Prefroms all update operations of a users Profile */
  updateProfile?: Maybe<ProfileUpdateMutation>;
  /**
   * Perfoms update operations on a staff
   * Mostly staff permisions
   */
  updateStaff?: Maybe<StaffUpdateMutation>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  postId: Scalars['ID'];
};


export type MutationCreateStaffArgs = {
  canAlterPodcast?: InputMaybe<Scalars['Boolean']>;
  canAlterPost?: InputMaybe<Scalars['Boolean']>;
  canAlterUser?: InputMaybe<Scalars['Boolean']>;
  canCreateOpportunities?: InputMaybe<Scalars['Boolean']>;
  canCreatePodcast?: InputMaybe<Scalars['Boolean']>;
  canCreatePost?: InputMaybe<Scalars['Boolean']>;
  canCreateUser?: InputMaybe<Scalars['Boolean']>;
  canDeleteOpportunities?: InputMaybe<Scalars['Boolean']>;
  canDeletePodcast?: InputMaybe<Scalars['Boolean']>;
  canDeletePost?: InputMaybe<Scalars['Boolean']>;
  canDeleteUser?: InputMaybe<Scalars['Boolean']>;
  canUpdateOpportunities?: InputMaybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
};


export type MutationCreateSuperUserArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  secretCode?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUpdateAddressArgs = {
  address: Scalars['String'];
  addressId?: InputMaybe<Scalars['ID']>;
  city: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  zipCode?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUpdateEventArgs = {
  addressId?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  description: Scalars['String'];
  eventId?: InputMaybe<Scalars['ID']>;
  organizerId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};


export type MutationCreateUpdateEventImageArgs = {
  description?: InputMaybe<Scalars['String']>;
  eventId: Scalars['ID'];
  eventImageId?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateUpdateFileArgs = {
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  fileId?: InputMaybe<Scalars['ID']>;
  folder?: InputMaybe<FileFoldersEnum>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUpdateGuestArgs = {
  description?: InputMaybe<Scalars['String']>;
  guestId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateUpdateImageArgs = {
  description?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<ImageFoldersEnum>;
  image?: InputMaybe<Scalars['Upload']>;
  imageId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateUpdateOpportunityArgs = {
  abstract?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  opportunityId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};


export type MutationCreateUpdateOrganizationArgs = {
  addressId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  organizationId?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUpdatePodcastArgs = {
  audioId?: InputMaybe<Scalars['ID']>;
  coverPhotoId?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  guestIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  hostIds: Array<InputMaybe<Scalars['ID']>>;
  podcastId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};


export type MutationCreateUpdatePostArgs = {
  abstract?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  coverPhotoId?: InputMaybe<Scalars['ID']>;
  postId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};


export type MutationCreateUpdateTagArgs = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  tagId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteFileArgs = {
  fileId: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  imageId: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID'];
};


export type MutationIncreasePodcastListensArgs = {
  podcastId: Scalars['ID'];
};


export type MutationIncreasePostViewCountArgs = {
  postId: Scalars['ID'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSwapEmailsArgs = {
  password: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfileArgs = {
  about?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  profileId: Scalars['ID'];
};


export type MutationUpdateStaffArgs = {
  canAlterPodcast?: InputMaybe<Scalars['Boolean']>;
  canAlterPost?: InputMaybe<Scalars['Boolean']>;
  canAlterUser?: InputMaybe<Scalars['Boolean']>;
  canCreateOpportunities?: InputMaybe<Scalars['Boolean']>;
  canCreatePodcast?: InputMaybe<Scalars['Boolean']>;
  canCreatePost?: InputMaybe<Scalars['Boolean']>;
  canCreateUser?: InputMaybe<Scalars['Boolean']>;
  canDeleteOpportunities?: InputMaybe<Scalars['Boolean']>;
  canDeletePodcast?: InputMaybe<Scalars['Boolean']>;
  canDeletePost?: InputMaybe<Scalars['Boolean']>;
  canDeleteUser?: InputMaybe<Scalars['Boolean']>;
  canUpdateOpportunities?: InputMaybe<Scalars['Boolean']>;
  userEmail: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifySecondaryEmailArgs = {
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** Create new or update existing opportunity */
export type OpportunityCreateUpdateMutation = {
  __typename?: 'OpportunityCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  opportunity?: Maybe<OpportunityType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type OpportunityType = Node & {
  __typename?: 'OpportunityType';
  abstract?: Maybe<Scalars['String']>;
  category?: Maybe<TagType>;
  content?: Maybe<Scalars['String']>;
  dateAdded: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
  lastUpdated: Scalars['DateTime'];
  opportunityId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type OpportunityTypeConnection = {
  __typename?: 'OpportunityTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OpportunityTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OpportunityType` and its cursor. */
export type OpportunityTypeEdge = {
  __typename?: 'OpportunityTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OpportunityType>;
};

/**
 * Performs create and update activiies on an `Organization`.
 * To perform an update all you need to do is pass the organization `id`.
 */
export type OrganizationCreateUpdateMutation = {
  __typename?: 'OrganizationCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  organization?: Maybe<OrganizationType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Organization graphql object type */
export type OrganizationType = {
  __typename?: 'OrganizationType';
  address: AddressNode;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Performs create and update activity on `Podcast` object.
 * To perform an update, all you need to do is pass the podcast `id`.
 */
export type PodcastCreateUpdateMutation = {
  __typename?: 'PodcastCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  podcast?: Maybe<PodcastType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Podcast graphql object type */
export type PodcastType = Node & {
  __typename?: 'PodcastType';
  audio?: Maybe<FileType>;
  coverPhoto?: Maybe<ImageType>;
  dateAdded: Scalars['DateTime'];
  /** short summary of this podcast */
  description: Scalars['String'];
  guests?: Maybe<Array<Maybe<GuestType>>>;
  hosts?: Maybe<Array<Maybe<HostType>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  lastUpdated: Scalars['DateTime'];
  listens: Scalars['Int'];
  podcastId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type PodcastTypeConnection = {
  __typename?: 'PodcastTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PodcastTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PodcastType` and its cursor. */
export type PodcastTypeEdge = {
  __typename?: 'PodcastTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PodcastType>;
};

/**
 * Performs create and update functionality on a blog postself.
 * To perform an update, you just need to pass in the blog `id`.
 */
export type PostCreateUpdateMutation = {
  __typename?: 'PostCreateUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  post?: Maybe<PostType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Deletes a post with the specified id. */
export type PostDeleteMutation = {
  __typename?: 'PostDeleteMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PostType = Node & {
  __typename?: 'PostType';
  abstract?: Maybe<Scalars['String']>;
  author: UserType;
  body: Scalars['String'];
  comments?: Maybe<Array<Maybe<CommentType>>>;
  coverPhoto?: Maybe<ImageType>;
  dateAdded: Scalars['DateTime'];
  dislikes: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  lastUpdated: Scalars['DateTime'];
  likes: Scalars['Int'];
  postId?: Maybe<Scalars['ID']>;
  readLength?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  views: Scalars['Int'];
};

export type PostTypeConnection = {
  __typename?: 'PostTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PostType` and its cursor. */
export type PostTypeEdge = {
  __typename?: 'PostTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PostType>;
};

/** Increases the view count on a post */
export type PostViewsIncreaseMutation = {
  __typename?: 'PostViewsIncreaseMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  post?: Maybe<PostType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  about?: Maybe<Scalars['String']>;
  image?: Maybe<ImageType>;
  profileId?: Maybe<Scalars['ID']>;
  user?: Maybe<UserType>;
};

/** Prefroms all update operations of a users Profile */
export type ProfileUpdateMutation = {
  __typename?: 'ProfileUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  profile?: Maybe<ProfileType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  allEventImages?: Maybe<Array<Maybe<EventImageType>>>;
  allPodcasts?: Maybe<PodcastTypeConnection>;
  allPosts?: Maybe<PostTypeConnection>;
  file?: Maybe<FileType>;
  files?: Maybe<FileTypeConnection>;
  getAddressById?: Maybe<AddressNode>;
  getGuestById?: Maybe<GuestType>;
  getPodcastById?: Maybe<PodcastType>;
  getPostById?: Maybe<PostType>;
  image?: Maybe<ImageType>;
  images?: Maybe<ImageTypeConnection>;
  me?: Maybe<UserNode>;
  mostListenedToPodcasts?: Maybe<PodcastTypeConnection>;
  opportunities?: Maybe<OpportunityTypeConnection>;
  opportunity?: Maybe<OpportunityType>;
  popularPosts?: Maybe<PostTypeConnection>;
  previousGuests?: Maybe<GuestTypeConnection>;
  recentHosts?: Maybe<Array<Maybe<UserType>>>;
  staffDetail?: Maybe<StaffType>;
  staffList?: Maybe<Array<StaffType>>;
  tags?: Maybe<TagTypeConnection>;
  user?: Maybe<UserNode>;
  userProfile?: Maybe<ProfileType>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryAllPodcastsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryAllPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  body_Icontains?: InputMaybe<Scalars['String']>;
  body_Istartswith?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likes?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  readLength?: InputMaybe<Scalars['Float']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryFileArgs = {
  fileId: Scalars['ID'];
};


export type QueryFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  description_Icontains?: InputMaybe<Scalars['String']>;
  description_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  folder_Iexact?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  name_Icontains?: InputMaybe<Scalars['String']>;
  name_Istartswith?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAddressByIdArgs = {
  addressId: Scalars['ID'];
};


export type QueryGetGuestByIdArgs = {
  guestId: Scalars['ID'];
};


export type QueryGetPodcastByIdArgs = {
  podcastId: Scalars['ID'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['ID'];
};


export type QueryImageArgs = {
  imageId: Scalars['ID'];
};


export type QueryImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_Icontains?: InputMaybe<Scalars['String']>;
  description_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  folder_Iexact?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMostListenedToPodcastsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryOpportunitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  category_Title?: InputMaybe<Scalars['String']>;
  category_Title_Icontains?: InputMaybe<Scalars['String']>;
  category_Title_Istartswith?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryOpportunityArgs = {
  opportunityId: Scalars['ID'];
};


export type QueryPopularPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  body_Icontains?: InputMaybe<Scalars['String']>;
  body_Istartswith?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likes?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  readLength?: InputMaybe<Scalars['Float']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};


export type QueryPreviousGuestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryStaffDetailArgs = {
  staffId: Scalars['ID'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  category_Iexact?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status_Archived?: InputMaybe<Scalars['Boolean']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']>;
  status_Verified?: InputMaybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Promote existing user to staff with certan permisions */
export type StaffCreateMutation = {
  __typename?: 'StaffCreateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  staff?: Maybe<StaffType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type StaffType = Node & {
  __typename?: 'StaffType';
  canAlterPodcast: Scalars['Boolean'];
  canAlterPost: Scalars['Boolean'];
  canAlterUser: Scalars['Boolean'];
  canCreateOpportunities: Scalars['Boolean'];
  canCreatePodcast: Scalars['Boolean'];
  canCreatePost: Scalars['Boolean'];
  canCreateUser: Scalars['Boolean'];
  canDeleteOpportunities: Scalars['Boolean'];
  canDeletePodcast: Scalars['Boolean'];
  canDeletePost: Scalars['Boolean'];
  canDeleteUser: Scalars['Boolean'];
  canUpdateOpportunities: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  staffId?: Maybe<Scalars['ID']>;
  user?: Maybe<UserType>;
};

/**
 * Perfoms update operations on a staff
 * Mostly staff permisions
 */
export type StaffUpdateMutation = {
  __typename?: 'StaffUpdateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  staff?: Maybe<StaffType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Classified */
export type SuperUserCreateMutation = {
  __typename?: 'SuperUserCreateMutation';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  success?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TagType = Node & {
  __typename?: 'TagType';
  category: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  tagId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type TagTypeConnection = {
  __typename?: 'TagTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TagTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TagType` and its cursor. */
export type TagTypeEdge = {
  __typename?: 'TagTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<TagType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  category: CustomUserCategory;
  commentSet: Array<CommentType>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hostSet: HostTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  pk?: Maybe<Scalars['Int']>;
  postSet: PostTypeConnection;
  profile?: Maybe<ProfileType>;
  secondaryEmail?: Maybe<Scalars['String']>;
  staff?: Maybe<StaffType>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};


export type UserNodeHostSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserNodePostSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  body_Icontains?: InputMaybe<Scalars['String']>;
  body_Istartswith?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likes?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  readLength?: InputMaybe<Scalars['Float']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  category: CustomUserCategory;
  commentSet: Array<CommentType>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  hostSet: HostTypeConnection;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  postSet: PostTypeConnection;
  profile?: Maybe<ProfileType>;
  staff?: Maybe<StaffType>;
};


export type UserTypeHostSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserTypePostSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  body_Icontains?: InputMaybe<Scalars['String']>;
  body_Istartswith?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Icontains?: InputMaybe<Scalars['DateTime']>;
  dateAdded_Istartswith?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  likes?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  readLength?: InputMaybe<Scalars['Float']>;
  readLength_Icontains?: InputMaybe<Scalars['Float']>;
  readLength_Istartswith?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  title_Icontains?: InputMaybe<Scalars['String']>;
  title_Istartswith?: InputMaybe<Scalars['String']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};
