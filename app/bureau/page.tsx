import BureauClient from "./BureauClient";
import { folderContent, folders } from "./bureau-data";

export default function BureauPage() {
  return <BureauClient folders={folders} folderContent={folderContent} />;
}
