import { FileNames } from "src/lib/storage/FileNames";
import { UserPrefixes } from "src/lib/storage/Prefixes";
import StorageClient from "src/lib/storage/StorageClient";
import { Path } from "src/utils/Path";

interface UserProfileRootProps {
  userId: string;
}

export namespace UserStorage {
  export namespace Profile {
    export const putProfileImage = async (
      file: File,
      props: UserProfileRootProps
    ) => {
      const { userId } = props;
      const prefix = UserPrefixes.Profile.getPrefix(userId);
      const filename = FileNames.User.Profile.PROFILE_IMAGE;
      const uri = Path.join(prefix, filename);
      return StorageClient.put(uri, file);
    };
  }
}
