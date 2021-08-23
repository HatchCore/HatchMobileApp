/* eslint-disable camelcase */
/* User */
export interface User {
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_img_uri: string;
  created_at: string;
  updated_at: string;
}

/* Project */
export interface Project {
  project_id: string;
  project_name: string;
  current_release_version: number;
  project_description: string;
  collaborator_goal: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectWithReleaseMetadata {
  project_id: string;
  current_release_version: number;
  project_name: string;
  project_description: string;
  collaborator_goal: number;
  num_collaborators: number;
  thumbnail_img_uri: string;
  project_created_at: string;
  latest_release_created_at: string;
}

export interface ProjectOwner {
  project_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectCollaborator {
  project_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectFeatureRequest {
  feature_request_id: string;
  project_id: string;
  user_id: string;
  owner_id: string;
  request_title: string;
  request_description: string;
  request_status: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectFeedbackRequest {
  feedback_request_id: string;
  project_id: string;
  user_id: string;
  request_title: string;
  request_description: string;
  request_img_uri: string;
  request_link_url: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectFeatureRequestWithVotes extends ProjectFeatureRequest {
  positive_votes: number;
  negative_votes: number;
  user_vote: number;
}

export interface ProjectFeatureRequestVote {
  user_id: string;
  feature_request_id: string;
  feature_request_vote: number;
  created_at: string;
  updated_at: string;
}

export enum FeatureRequestVoteValue {
  POSITIVE = 1,
  NEGATIVE = -1,
}

export interface Comment {
  comment_id: string;
  user_id: string;
  section_id: string;
  comment: string;
  created_at: string;
  updated_at: string;
}

export enum FeatureRequestStatus {
  UNASSIGNED = 0,
  PENDING = 10,
  IN_PROGRESS = 20,
  COMPLETED = 30,
  NOT_PRIORITIZED = 40,
}

/* Project Release */
export interface ProjectReleaseFeature {
  project_id: string;
  release_version: number;
  feature_index: number;
  feature_title: string;
  feature_message: string;
  img_uri: string;
}

export interface ProjectReleaseFooter {
  project_id: string;
  release_version: number;
  footer_index: number;
  footer_text: string;
  footer_url: string;
}

export interface ProjectReleaseFeatureInput {
  feature_index: number;
  feature_title: string;
  feature_message: string;
  img_uri: string;
}

export interface ProjectReleaseFooterInput {
  footer_index: number;
  footer_text: string;
  footer_url: string;
}

export interface ProjectRelease {
  project_id: string;
  release_version: number;
  release_name: string;
  release_description: string;
  logo_img_uri: string;
  jumbotron_title: string;
  jumbotron_message: string;
  jumbotron_img_uri: string;
  jumbotron_button_text: string;
  jumbotron_button_url: string;
  accent_title: string;
  accent_message: string;
  thumbnail_img_uri: string;
  features: [ProjectReleaseFeature];
  footers: [ProjectReleaseFooter];
  created_at: string;
  updated_at: string;
}

export enum ProjectReleaseReaction {
  POSITIVE = 1,
  NEGATIVE = -1,
}

export enum ProjectReleaseCompatibilityScore {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export enum ProjectReleaseExperienceRating {
  HORRIBLE = 1,
  BAD = 2,
  OK = 3,
  GOOD = 4,
  EXCELLENT = 5,
}

export interface ProjectReviewWithUserData {
  user_id: string;
  project_id: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_img_uri: string;
  experience_rating: number;
  compatibility_rating: number;
  product_rating: number;
  review_text: string;
  created_at: string;
  updated_at: string;
}

/* Chat */
export interface ChatChannel {
  chat_channel_id: string;
  project_id: string;
  channel_description: string;
  channel_name: string;
  channel_type: number;
  created_at: string;
  updated_at: string;
}

export interface ChatChannelMetadata {
  chat_channel_id: string;
  project_id: string;
  channel_description: string;
  channel_name: string;
  channel_type: number;
}

export interface ChatMessageWithMetadata {
  chat_message_id: string;
  user_id: string;
  username: string;
  project_id: string;
  channel_type: number;
  chat_channel_id: string;
  chat_message: string;
  chat_attachments: ChatMessageFile[];
  created_at: string;
  updated_at: string;
}

export interface ChatMessageFile {
  chat_message_id: string;
  chat_attachment_id: string;
  attachment_filename: string;
  attachment_uri: string;
  created_at: string;
  updated_at: string;
}

export interface ChatMessageFileInput {
  chat_attachment_id: string;
  attachment_filename: string;
  attachment_uri: string;
}

/* Metrics */
export interface CollaboratorCounts {
  total_collaborators: number;
}

export interface CollaboratorCountTimeSeries {
  date: string;
  total_collaborators: number;
}

export interface CompleteProjectMetrics {
  getCollaboratorCountsPerProject: CollaboratorCounts;
  getCollaboratorCountTimeSeriesPerProject: CollaboratorCountTimeSeries[];
}

export interface ProjectUserPreferences {
  project_id: string;
  user_id: string;
  notify_when_collaborator_join: boolean;
  notify_when_new_chat_message: boolean;
  notify_when_new_feature_request: boolean;
  notify_when_new_feedback_request: boolean;
}

export interface ProjectUserPreferencesWithProjectName {
  project_id: string;
  user_id: string;
  project_name: string;
  notify_when_collaborator_join: boolean;
  notify_when_new_chat_message: boolean;
  notify_when_new_feature_request: boolean;
  notify_when_new_feedback_request: boolean;
}

export interface UserPreferences {
  user_id: string;
  notify_when_new_release: boolean;
}

export interface ProjectUserActivity {
  project_id: string;
  user_id: string;
  last_activity: string;
}

export interface UserPushNotificationToken {
  user_id: string;
  push_notification_token: string;
}
