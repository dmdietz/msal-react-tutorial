import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function SignOutButton() {
  const { instance } = useMsal();

  function handleLogout({ logoutType }: { logoutType: string; }): void {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  }

  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign Out"
    >
      <Dropdown.Item as="button" onClick={() => handleLogout({ logoutType: "popup" })}>
        Sign out using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogout({ logoutType: "redirect" })}>
        Sign out using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}