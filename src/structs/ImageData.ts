import StorageClient from "src/lib/storage/StorageClient";

interface ImageDataProps {
  file?: File;
  localSrc?: string;
  remoteUri?: string;
  alt?: string;
}

export default class ImageData {
  remoteUri: string | undefined;

  localSrc: string | undefined;

  file: File;

  alt: string | undefined;

  constructor(imageDataProps: ImageDataProps) {
    this.remoteUri = imageDataProps.remoteUri;
    this.localSrc = imageDataProps.localSrc;
    this.file = imageDataProps.file;
    this.alt = imageDataProps.alt;
  }

  getSrc = async (
    storageLevel: string | null = null,
    ownerIdentityId: string | null = null
  ): Promise<string> => {
    if (this.remoteUri) {
      try {
        const signedImgSrc = await StorageClient.get(
          this.remoteUri,
          storageLevel,
          ownerIdentityId
        );
        console.debug(`Got signed img src: ${signedImgSrc}`);
        return signedImgSrc;
      } catch (error) {
        console.error(error);
        return null;
      }
    } else {
      return this.localSrc;
    }
  };
}
