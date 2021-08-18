import { FileNames } from "src/lib/storage/FileNames";
import { ProjectReleasePrefixes } from "src/lib/storage/Prefixes";
import StorageClient from "src/lib/storage/StorageClient";
import { Path } from "src/utils/Path";

interface ProjectReleaseRootProps {
  projectId: string;
  releaseVersion: number;
}

interface ProjectReleaseFeatureProps {
  projectId: string;
  releaseVersion: number;
  featureIndex: number;
}

export namespace ProjectReleaseStorage {
  export const putLogoImage = async (
    file: File,
    props: ProjectReleaseRootProps
  ) => {
    const { projectId, releaseVersion } = props;
    const prefix = ProjectReleasePrefixes.Root.getPrefix(
      projectId,
      releaseVersion
    );
    const filename = FileNames.ProjectRelease.LOGO_IMAGE;
    const uri = Path.join(prefix, filename);
    return StorageClient.put(uri, file);
  };

  export const putJumbotronImage = async (
    file: File,
    props: ProjectReleaseRootProps
  ) => {
    const { projectId, releaseVersion } = props;
    const prefix = ProjectReleasePrefixes.Root.getPrefix(
      projectId,
      releaseVersion
    );
    const filename = FileNames.ProjectRelease.JUMBOTRON_IMAGE;
    const uri = Path.join(prefix, filename);
    return StorageClient.put(uri, file);
  };

  export const putFeatureImage = async (
    file: File,
    props: ProjectReleaseFeatureProps
  ) => {
    const { projectId, releaseVersion, featureIndex } = props;
    const prefix = ProjectReleasePrefixes.Feature.getPrefix(
      projectId,
      releaseVersion,
      featureIndex
    );
    const filename = FileNames.ProjectRelease.FEATURE_IMAGE;
    const uri = Path.join(prefix, filename);
    return StorageClient.put(uri, file);
  };
}
