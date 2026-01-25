import { createAccount } from "../../api/account/account";
import { router } from "../init";

const accountRouter = router({
  createAccount: createAccount(),
});

export default accountRouter;
