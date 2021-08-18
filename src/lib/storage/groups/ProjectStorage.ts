import { FileNames } from "src/lib/storage/FileNames";
import { ProjectPrefixes } from "src/lib/storage/Prefixes";
import StorageClient from "src/lib/storage/StorageClient";
import { Path } from "src/utils/Path";

interface ProjectFeatureRootProps {
  projectId: string;
}

interface ProjectFeatureRequestProps {
  projectId: string;
  featureRequestId: string;
}

interface ProjectFeedbackRequestProps {
  projectId: string;
  feedbackRequestId: string;
}

interface ProjectChatMessageProps {
  projectId: string;
  chatChannelId: string;
  chatMessageId: string;
}

export namespace ProjectStorage {
  export const putThumbnailImage = async (
    file: File,
    props: ProjectFeatureRootProps
  ) => {
    const { projectId } = props;
    const prefix = ProjectPrefixes.Root.getPrefix(projectId);
    const filename = FileNames.ProjectRelease.THUMBNAIL_IMAGE;
    const uri = Path.join(prefix, filename);
    return StorageClient.put(uri, file);
  };

  export namespace FeatureRequest {
    export const putFeatureRequestImage = async (
      file: File,
      props: ProjectFeatureRequestProps
    ) => {
      const { projectId, featureRequestId } = props;
      const prefix = ProjectPrefixes.FeatureRequest.getPrefix(
        projectId,
        featureRequestId
      );
      const filename = FileNames.Project.FeatureRequest.THUMBNAIL_IMAGE;
      const uri = Path.join(prefix, filename);
      return StorageClient.put(uri, file);
    };
  }

  export namespace FeedbackRequest {
    export const putFeedbackRequestImage = async (
      file: File,
      props: ProjectFeedbackRequestProps
    ) => {
      const { projectId, feedbackRequestId } = props;
      const prefix = ProjectPrefixes.FeedbackRequest.getPrefix(
        projectId,
        feedbackRequestId
      );
      const filename = FileNames.Project.FeedbackRequest.THUMBNAIL_IMAGE;
      const uri = Path.join(prefix, filename);
      return StorageClient.put(uri, file);
    };
  }

  export namespace ChatMessage {
    export const putFile = async (
      file: File,
      props: ProjectChatMessageProps
    ) => {
      const { projectId, chatChannelId, chatMessageId } = props;
      const prefix = ProjectPrefixes.ChatMessage.getPrefix(
        projectId,
        chatChannelId,
        chatMessageId
      );
      const filename = FileNames.Project.Chat.FILE_ATTACHMENTS;
      const uri = Path.join(prefix, filename, file.name);
      return StorageClient.putFile(uri, file);
    };
  }
}
