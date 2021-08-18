export namespace ProjectReleasePrefixes {
  export namespace Root {
    export const getPrefix = (projectId: string, releaseVersion: number) => {
      return `projects/${projectId}/releases/${releaseVersion}`;
    };
  }

  export namespace Feature {
    export const getPrefix = (
      projectId: string,
      releaseVersion: number,
      featureIndex: number
    ) => {
      const root = ProjectReleasePrefixes.Root.getPrefix(
        projectId,
        releaseVersion
      );
      return `${root}/features/${featureIndex}`;
    };
  }
}

export namespace ProjectPrefixes {
  export namespace Root {
    export const getPrefix = (projectId: string) => {
      return `projects/${projectId}`;
    };
  }

  export namespace FeatureRequest {
    export const getPrefix = (projectId: string, featureRequestId: string) => {
      return `projects/${projectId}/feature_requests/${featureRequestId}`;
    };
  }

  export namespace FeedbackRequest {
    export const getPrefix = (projectId: string, feedbackRequestId: string) => {
      return `projects/${projectId}/feedback_requests/${feedbackRequestId}`;
    };
  }

  export namespace ChatMessage {
    export const getPrefix = (
      projectId: string,
      chatChannelId: string,
      chatMessageId: string
    ) => {
      return `projects/${projectId}/chat_channel/${chatChannelId}/chat_message/${chatMessageId}`;
    };
  }
}

export namespace UserPrefixes {
  export namespace Profile {
    export const getPrefix = (userId: string) => {
      return `users/${userId}/profile`;
    };
  }
}
