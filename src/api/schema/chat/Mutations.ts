export default class ChatMutations {
  static createChatChannel = /* GraphQL */ `
    mutation CreateChatChannel(
      $chat_channel_id: ID!
      $project_id: ID!
      $channel_type: Int!
      $channel_description: String
      $channel_name: String
    ) {
      createChatChannel(
        chat_channel_id: $chat_channel_id
        project_id: $project_id
        channel_type: $channel_type
        channel_description: $channel_description
        channel_name: $channel_name
      ) {
        channel_description
        channel_name
        channel_type
        chat_channel_id
        created_at
        project_id
        updated_at
      }
    }
  `;

  static createChatMessage = /* GraphQL */ `
    mutation CreateChatMessage(
      $chat_channel_id: ID!
      $chat_message: String!
      $chat_message_id: ID!
      $user_id: ID!
      $chat_attachments: [ChatMessageFileInput!]
    ) {
      createChatMessage(
        chat_channel_id: $chat_channel_id
        chat_message: $chat_message
        chat_message_id: $chat_message_id
        user_id: $user_id
        chat_attachments: $chat_attachments
      ) {
        chat_channel_id
        chat_message
        chat_message_id
        chat_attachments {
          chat_attachment_id
          attachment_filename
          attachment_uri
          created_at
          updated_at
        }
        created_at
        updated_at
        user_id
        username
        project_id
        channel_type
      }
    }
  `;

  static markChatChannelMessagesAsRead = /* GraphQL */ `
    mutation MarkChatChannelMessagesAsRead(
      $chat_channel_id: ID!
      $user_id: ID!
    ) {
      markChatChannelMessagesAsRead(
        chat_channel_id: $chat_channel_id
        user_id: $user_id
      )
    }
  `;

  static createChatChannelMember = /* GraphQL */ `
    mutation CreateChatChannelMember($chat_channel_id: ID!, $user_id: ID!) {
      createChatChannelMember(
        chat_channel_id: $chat_channel_id
        user_id: $user_id
      ) {
        created_at
        first_name
        email
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static deleteChatChannelMember = /* GraphQL */ `
    mutation DeleteChatChannelMember($chat_channel_id: ID!, $user_id: ID!) {
      deleteChatChannelMember(
        chat_channel_id: $chat_channel_id
        user_id: $user_id
      ) {
        created_at
        first_name
        email
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;
}
