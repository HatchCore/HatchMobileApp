export default class ChatQueries {
  static getChatChannelMetadata = /* GraphQL */ `
    query GetChatChannelMetadata($project_id: ID!, $username: String!) {
      getChatChannelMetadata(project_id: $project_id, username: $username) {
        channel_description
        channel_name
        channel_type
        chat_channel_id
        project_id
      }
    }
  `;

  static getChatChannelMetadataForUser = /* GraphQL */ `
    query GetChatChannelMetadataForUser($project_id: ID!, $username: String!) {
      getChatChannelMetadataForUser(
        project_id: $project_id
        username: $username
      ) {
        channel_description
        channel_name
        channel_type
        chat_channel_id
        project_id
      }
    }
  `;

  static getProjectChatChannelNames = /* GraphQL */ `
    query GetProjectChatChannelNames($project_id: ID!, $channel_type: Int!) {
      getProjectChatChannelNames(
        project_id: $project_id
        channel_type: $channel_type
      )
    }
  `;

  static getChatChannelMessages = /* GraphQL */ `
    query GetChatChannelMessages(
      $chat_channel_id: ID!
      $latest_time: AWSDateTime
      $num_messages: Int
    ) {
      getChatChannelMessages(
        chat_channel_id: $chat_channel_id
        latest_time: $latest_time
        num_messages: $num_messages
      ) {
        chat_message_id
        user_id
        username
        project_id
        channel_type
        chat_channel_id
        chat_message
        chat_attachments {
          chat_attachment_id
          attachment_filename
          attachment_uri
          created_at
          updated_at
        }
        created_at
        updated_at
      }
    }
  `;

  static getChatChannelMembers = /* GraphQL */ `
    query GetChatChannelMembers($chat_channel_id: ID!) {
      getChatChannelMembers(chat_channel_id: $chat_channel_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static getUnreadChannelMessageCountForUser = /* GraphQL */ `
    query GetUnreadChannelMessageCountForUser(
      $chat_channel_id: ID!
      $user_id: ID!
    ) {
      getUnreadChannelMessageCountForUser(
        chat_channel_id: $chat_channel_id
        user_id: $user_id
      )
    }
  `;

  static getTotalUnreadMessageCountForUser = /* GraphQL */ `
    query GetTotalUnreadMessageCountForUser($project_id: ID!, $user_id: ID!) {
      getTotalUnreadMessageCountForUser(
        project_id: $project_id
        user_id: $user_id
      )
    }
  `;
}
