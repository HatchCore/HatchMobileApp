export default class ChatSubscriptions {
  static onCreateChatMessageInChannel = /* GraphQL */ `
    subscription onCreateChatMessageInChannel($chat_channel_id: ID!) {
      onCreateChatMessageInChannel(chat_channel_id: $chat_channel_id) {
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

  static onCreateChatMessageInProject = /* GraphQL */ `
    subscription onCreateChatMessageInProject($project_id: ID!) {
      onCreateChatMessageInProject(project_id: $project_id) {
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
}
