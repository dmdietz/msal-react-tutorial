import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function SignInButton() {
  const { instance } = useMsal();

  function handleLogin({ loginType }: { loginType: string; }): void {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  }
  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign In"
    >
      <Dropdown.Item as="button" onClick={() => handleLogin({ loginType: "popup" })}>
        Sign in using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogin({ loginType: "redirect" })}>
        Sign in using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}
