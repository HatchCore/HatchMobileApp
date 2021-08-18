import { Storage } from "aws-amplify";
import imageCompression from "browser-image-compression";

import {
  ProjectReleaseStorage,
  ProjectStorage,
  UserStorage,
} from "src/lib/storage/groups";

interface Progress {
  loaded: number;
  total: number;
}

interface StoragePutResult {
  key: string;
}

class StorageClient {
  static put = async (filename: string, file: File, level = "public") => {
    const options = {
      maxSizeMB: 1,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(file, options);
    const { key } = (await Storage.put(filename, compressedFile, {
      level,
      contentType: file.type,
      progressCallback(progress: Progress) {
        console.debug(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    })) as StoragePutResult;

    return key;
  };

  static putFile = async (filename: string, file: File, level = "public") => {
    const options = {
      maxSizeMB: 1,
      useWebWorker: true,
    };
    const imageFiles = ["image/gif", "image/jpeg", "image/png"];

    let compressedFile;

    if (imageFiles.includes(file.type)) {
      compressedFile = await imageCompression(file, options);
    } else {
      compressedFile = file;
    }
    const { key } = (await Storage.put(filename, compressedFile, {
      level,
      contentType: file.type,
      progressCallback(progress: Progress) {
        console.debug(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    })) as StoragePutResult;

    return key;
  };

  static get = async (
    uriKey: string,
    level = "public",
    identityId: string
  ): Promise<string> => {
    try {
      return (await Storage.get(uriKey, {
        level,
        identityId,
      })) as string;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static remove = async (filename, level = "public") => {
    const { key } = await Storage.remove(filename, {
      level,
    });
    return key;
  };

  static Project = ProjectStorage;

  static ProjectRelease = ProjectReleaseStorage;

  static User = UserStorage;
}

export default StorageClient;
