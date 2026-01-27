import { createAccount, signInAccount } from "../../api/account/account";
import { router } from "../init";

const accountRouter = router({
  createAccount: createAccount(),
  signInAccount: signInAccount(),
});

export default accountRouter;
